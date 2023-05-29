import React, { Fragment, useEffect } from 'react';
import Producto from './Producto';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from '../actions/productoActions';

const Productos = () => {

    const dispatch = useDispatch(); 

    useEffect( () => {

        // consultar la API
        const cargarProductos = () => dispatch( obtenerProductosAction() );
        cargarProductos();
        //eslint-disable-next-line    
    }, []);

    // obtener el state
    const { productos, error, cargando } = useSelector( state => state.productos)
    /* const productos = useSelector( state => state.productos.productos); */
    /* const error = useSelector( state => state.productos.error); */
    /* const cargando = useSelector( state => state.Productos.loading); */


    return (
        <Fragment>
            <h2 className='text-center my-5'>Listado de Productos</h2>

            { error ? <p className='font-weight-bold alert alert-danger text-center
             mt-4'>Hubo un Error</p> : null}

            { cargando ? <p className='text-center'>Cargando...</p> : null }

            <table className='table table-striped'>
                <thead className='bg-primary table-dark'>
                    <tr>
                        <th className='col'>Nombre</th>
                        <th className='col'>Precio</th>
                        <th className='col'>Acciones</th>
                    </tr>
                </thead>

                <tbody>
                    { productos.lenght === 0 ? 'No hay productos' : (
                        productos.map(producto => (
                            <Producto 
                              key={producto.id}
                              producto={producto}  
                            />
                        ))
                    )}
                </tbody>
            </table>
        </Fragment>
    );
}

export default Productos;