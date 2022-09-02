import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Card,
    Row,
    FormGroup,
    Form,
    Input,
    Col,
} from "reactstrap";

import './create.css';

// const member = {
//     id: 1,
//     name: "Maria Luiza Dornelas",
//     email: "mariadornelas@gmail.com",
// }

const MemberCreate = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [birthday, setBirthday] = useState("");
    const [department, setDepartment] = useState("");
    const [office, setOffice] = useState("");

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
                            //   placeholder="Nome"
                            type="text"
                            className="input-content"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">E-mail</label>
                        <FormGroup>
                            <Input
                            //   placeholder="Email"
                            type="email"
                            className="input-content"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Data de Nascimento</label>
                        <FormGroup>
                            <Input
                            //   placeholder="Data de Nascimento"
                            type="data"
                            className="input-content"
                            onChange={(e) => setBirthday(e.target.value)}
                            value={birthday}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Departamento</label>
                        <FormGroup>
                            <Input
                            //   placeholder="Departamento"
                            type="text"
                            className="input-content"
                            onChange={(e) => setDepartment(e.target.value)}
                            value={department}
                            />
                        </FormGroup>
                        </Col>
                        <Col>
                            <label className="input-label d-flex">Cargo</label>
                        <FormGroup>
                            <Input
                            //   placeholder="Cargo"
                            type="text"
                            className="input-content"
                            onChange={(e) => setOffice(e.target.value)}
                            value={office}
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
    };
    
    export default MemberCreate;