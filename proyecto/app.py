from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:root@localhost/empresa'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
ma = Marshmallow(app)

class Producto(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    precio = db.Column(db.Float)
    stock = db.Column(db.Integer)
    imagen = db.Column(db.String(400))
    descripcion = db.Column(db.String(300))

    def __init__(self, nombre, precio, stock, imagen, descripcion):
        self.nombre = nombre
        self.precio = precio
        self.stock = stock
        self.imagen = imagen
        self.descripcion = descripcion

class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    password = db.Column(db.String(100))

    def __init__(self, nombre, password):
        self.nombre = nombre
        self.password = password

class Empleado(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100))
    puesto = db.Column(db.String(100))
    sueldo = db.Column(db.Float)
    foto = db.Column(db.String(400))

    def __init__(self, nombre, puesto, sueldo, foto):
        self.nombre = nombre
        self.puesto = puesto
        self.sueldo = sueldo
        self.foto = foto

with app.app_context():
    db.create_all()

class ProductoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'precio', 'stock', 'imagen', 'descripcion')

class UsuarioSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'password')

class EmpleadoSchema(ma.Schema):
    class Meta:
        fields = ('id', 'nombre', 'puesto', 'sueldo', 'foto')

producto_schema = ProductoSchema()
productos_schema = ProductoSchema(many=True)

usuario_schema = UsuarioSchema()
usuarios_schema = UsuarioSchema(many=True)

empleado_schema = EmpleadoSchema()
empleados_schema = EmpleadoSchema(many=True)

# Producto Endpoints

@app.route('/productos', methods=['GET'])
def get_productos():
    all_productos = Producto.query.all()
    result = productos_schema.dump(all_productos)
    return jsonify(result)

@app.route('/productos/<id>', methods=['GET'])
def get_producto(id):
    producto = Producto.query.get(id)
    return producto_schema.jsonify(producto)

@app.route('/productos/<id>', methods=['DELETE'])
def delete_producto(id):
    producto = Producto.query.get(id)
    db.session.delete(producto)
    db.session.commit()
    return producto_schema.jsonify(producto)

@app.route('/productos', methods=['POST'])
def create_producto():
    nombre = request.json['nombre']
    precio = request.json['precio']
    stock = request.json['stock']
    imagen = request.json['imagen']
    descripcion = request.json['descripcion']

    new_producto = Producto(nombre, precio, stock, imagen, descripcion)
    db.session.add(new_producto)
    db.session.commit()
    return producto_schema.jsonify(new_producto)

@app.route('/productos/<id>', methods=['PUT'])
def update_producto(id):
    producto = Producto.query.get(id)

    producto.nombre = request.json['nombre']
    producto.precio = request.json['precio']
    producto.stock = request.json['stock']
    producto.imagen = request.json['imagen']
    producto.descripcion = request.json['descripcion']

    db.session.commit()
    return producto_schema.jsonify(producto)

# Usuario Endpoints

@app.route('/usuarios', methods=['GET'])
def get_usuarios():
    all_usuarios = Usuario.query.all()
    result = usuarios_schema.dump(all_usuarios)
    return jsonify(result)

@app.route('/usuarios/<id>', methods=['GET'])
def get_usuario(id):
    usuario = Usuario.query.get(id)
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios/<id>', methods=['DELETE'])
def delete_usuario(id):
    usuario = Usuario.query.get(id)
    db.session.delete(usuario)
    db.session.commit()
    return usuario_schema.jsonify(usuario)

@app.route('/usuarios', methods=['POST'])
def create_usuario():
    nombre = request.json['nombre']
    password = request.json['password']

    new_usuario = Usuario(nombre, password)
    db.session.add(new_usuario)
    db.session.commit()
    return usuario_schema.jsonify(new_usuario)

@app.route('/usuarios/<id>', methods=['PUT'])
def update_usuario(id):
    usuario = Usuario.query.get(id)

    usuario.nombre = request.json['nombre']
    usuario.password = request.json['password']

    db.session.commit()
    return usuario_schema.jsonify(usuario)


# Empleado Endpoints

@app.route('/empleados', methods=['GET'])
def get_empleados():
    all_empleados = Empleado.query.all()
    result = empleados_schema.dump(all_empleados)
    return jsonify(result)

@app.route('/empleados/<id>', methods=['GET'])
def get_empleado(id):
    empleado = Empleado.query.get(id)
    return empleado_schema.jsonify(empleado)

@app.route('/empleados/<id>', methods=['DELETE'])
def delete_empleado(id):
    empleado = Empleado.query.get(id)
    db.session.delete(empleado)
    db.session.commit()
    return empleado_schema.jsonify(empleado)

@app.route('/empleados', methods=['POST'])
def create_empleado():
    nombre = request.json['nombre']
    puesto = request.json['puesto']
    sueldo = request.json['sueldo']
    foto = request.json['foto']

    new_empleado = Empleado(nombre, puesto, sueldo, foto)
    db.session.add(new_empleado)
    db.session.commit()
    return empleado_schema.jsonify(new_empleado)

@app.route('/empleados/<id>', methods=['PUT'])
def update_empleado(id):
    empleado = Empleado.query.get(id)

    empleado.nombre = request.json['nombre']
    empleado.puesto = request.json['puesto']
    empleado.sueldo = request.json['sueldo']
    empleado.foto = request.json['foto']

    db.session.commit()
    return empleado_schema.jsonify(empleado)



if __name__ == '__main__':
    app.run(debug=True, port=5000)
