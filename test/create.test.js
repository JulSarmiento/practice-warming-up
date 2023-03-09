const httpStatus =  require('http-status');
const {createProduct} = require('../controller/product.controller');


describe('createProduct', () => {

  // Caso exitoso
  it('It should create a new product.', async () => {
    // objeto req.body que simulamos enviar.
    const req = {
      body: {
        name: 'Producto de prueba',
        price: 19.99,
        description: 'Este es un producto de prueba',
      },
    }

    // definimos una funcion simulada para enviar respuestas HTTP
    const send = jest.fn();


    // definimos una instancia mock de productModel, recordemos que debemos instanciar la base de datos mediante el shcema.
    const mockProduct = {
      name: req.body.name,
      price: req.body.price,
      description: req.body.description,
      _id: 'producto-123',
    };

    const save = jest.fn().mockResolvedValue(mockProduct);
    const productModel = jest.fn().mockReturnValue({ save });

    // definimos un objeto de respuesta HTTP simulado

    const res = {
      status: jest.fn().mockReturnValue({ send }),
    };

    // llamamos a la funcion con los objetos de solicitud y respuesta simulados
    await createProduct(req, res, productModel);

    // comprobamos que se llamo a res.status con el codigo 201
    expect(res.status).toHaveBeenCalledWith(httpStatus.CREATED);

    // comprobamos que se llamo a send con el producto creado
    expect(send).toHaveBeenCalledWith(mockProduct);

  });

  it('debe devolver un error 500 si hay un error al crear el producto', async () => {
    // Definir un objeto de solicitud HTTP simulado
    const req = {
      body: {
        name: 'Producto de prueba',
        price: 19.99,
        description: 'Este es un producto de prueba',
      },
    };

    // Definir una función simulada para enviar respuestas HTTP
    const json = jest.fn();

    // Definir una instancia simulada de productModel
    const save = jest.fn().mockRejectedValue(new Error('Error de prueba'));
    const productModel = jest.fn().mockReturnValue({ save });

    // Definir un objeto de respuesta HTTP simulado
    const res = {
      status: jest.fn().mockReturnValue({ json }),
    };

    // Llamar a la función con los objetos de solicitud y respuesta simulados
    await createProduct(req, res, productModel);

    // Comprobar que se llamó a res.status con el código 500
    expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR);

    // Comprobar que se llamó a json con el mensaje de error
    expect(json).toHaveBeenCalledWith({
      message: 'Error de prueba',
    });
  });


});



  
// });