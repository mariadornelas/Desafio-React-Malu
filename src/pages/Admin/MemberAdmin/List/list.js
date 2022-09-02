import React from 'react';
import {Table, Thead, Tbody, Tr, Th, Td} from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import { FaTrash } from 'react-icons/fa';
import { FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './list.css';

const Member = () => {
    return (
        <>
            <div className='title'>
                <h1>Lista de Membros</h1>
            </div>
            <div className='container-table'>
                <Table className="table">
                    <Thead className="head-table">
                        <Tr>
                            <Th>Nome</Th>
                            <Th>Email</Th>
                            <Th>Departamento</Th>
                            <Th>Cargo</Th>
                        </Tr>
                    </Thead>
                    <Tbody className="body-table">
                        <Tr>
                            <Td>Erick</Td>
                            <Td>erick@astro.com</Td>
                            <Td>Comercial</Td>
                            <Td>Gerente</Td>
                            <Td><Link  className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                        <Tr>
                            <Td>Bárbara</Td>
                            <Td>barbara@astro.com</Td>
                            <Td>Projetos</Td>
                            <Td>Diretor</Td>
                            <Td><Link  className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                        <Tr>
                            <Td>Thiago</Td>
                            <Td>thiago@astro.com</Td>
                            <Td>Marketing</Td>
                            <Td>Diretor</Td>
                            <Td><Link  className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                        <Tr>
                            <Td>Bianca</Td>
                            <Td>bianca@astro.com</Td>
                            <Td>Presidência</Td>
                            <Td>Diretor</Td>
                            <Td><Link  className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                        <Tr>
                            <Td>Carolina</Td>
                            <Td>carolina@astro.com</Td>
                            <Td>Comercial</Td>
                            <Td>Assessor</Td>
                            <Td><Link  className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                        <Tr>
                            <Td>Leonardo</Td>
                            <Td>leonardo@astro.com</Td>
                            <Td>Marketing</Td>
                            <Td>Assessor</Td>
                            <Td><Link className='link' to='/create'><FaPen /></Link></Td>
                            <Td><Link className='link' to='/list'><FaTrash /></Link></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </div>

            <div className='list-btn'>
                <Link to="/login" className="link">
                    <div className="btn2">
                        <button className="btn-btn3">Voltar</button>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Member;