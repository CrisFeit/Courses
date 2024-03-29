import assert from 'assert'
import Product from './product.js'
import Service from './service.js'

/*
 * Should throw an error when description is less than 5 caracters long
 */
{
    const params = {
        description: 'my p',
        id: 1,
        price: 1000,
    }

    const product = new Product({
        onCreate: () => { },
        service: new Service()
    })

    assert.rejects(
        () => product.create(params),
        { message: 'description must be higher than 5' },
        'it should throw and error with wrong description'
    )

}