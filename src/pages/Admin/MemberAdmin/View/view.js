import React, { useState } from "react";
import {
    Button,
    Card,
    Row,
    FormGroup,
    Form,
    Input,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";

import './view.css';


const members = {
    id: 1,
    name: "Maria Luiza Dornelas",
    email: "maria@astro.com",
    birthday: "30/07/1998",
    department: "Comercial",
    office: "Gerente",
}


const MemberView = () => {
    const [name, setName] = useState(members.name);
    const [email, setEmail] = useState(members.email);
    const [birthday, setBirthday] = useState(members.birthday);
    const [department, setDepartment] = useState(members.department);
    const [office, setOffice] = useState(members.office);


    return (
        <>
          <Row>
            <div>
              <Card>
                <Form className="form-create">
                <h1 className="title1">Informações dos Membros</h1>
                <div className="container-create">
                    <div className="form-create-1">
                        <Col>
                            <label className="input-label d-flex">Nome</label>
                        <FormGroup>
                            <Input
                            placeholder='-'
                            type="text"
                            className="input-content"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            disabled
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">E-mail</label>
                        <FormGroup>
                            <Input
                            placeholder="-"
                            type="email"
                            className="input-content"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            disabled
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Data de Nascimento</label>
                        <FormGroup>
                            <Input
                            placeholder="-"
                            type="data"
                            className="input-content"
                            onChange={(e) => setBirthday(e.target.value)}
                            value={birthday}
                            disabled
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Departamento</label>
                        <FormGroup>
                            <Input
                            placeholder="-"
                            type="text"
                            className="input-content"
                            onChange={(e) => setDepartment(e.target.value)}
                            value={department}
                            disabled
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Cargo</label>
                        <FormGroup>
                            <Input
                            placeholder="-"
                            type="text"
                            className="input-content"
                            onChange={(e) => setOffice(e.target.value)}
                            value={office}
                            disabled
                            />
                        </FormGroup>
                        </Col>
                    </div>
                  <Link to="/login" className="link">
                    <div className="btn1">
                        <Button className="btn-btn">Adicionar</Button>
                    </div>
                  </Link>
                  <Link to="/list" className="link">
                    <div className="btn2">
                        <button className="btn-btn2">Voltar</button>
                    </div>
                  </Link>
                </div>
                </Form>
              </Card>
            </div>
          </Row>
        </>
      );
}

export default MemberView;