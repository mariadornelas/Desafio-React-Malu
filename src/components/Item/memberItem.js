// reactstrap components
import {
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
} from "reactstrap";

import { Link } from "react-router-dom";
import { Name } from "./style";

const Item = (props) => {
    function openDeleteModal() {
      props.setShowDeleteModal(true);
    }

    return (
        <tr>
            <th scope="row">
                <Media className="align-items-center">
                    <Media>
                        <Name className="mb-0 text-sm">
                            {props.name}
                        </Name>
                    </Media>
                </Media>
            </th>
            <td>{props.quantity} Imóveis</td>
            <td>{props.registration}</td>
            <td className="text-right">
                <UncontrolledDropdown>
                    <DropdownToggle
                        className="btn-icon-only text-light"
                        href="#pablo"
                        role="button"
                        size="sm"
                        color=""
                        onClick={(e) => e.preventDefault()}
                    >
                        <i className="fas fa-ellipsis-v" />
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-arrow" right>
                        <Link to="/manager/proprietario/show">
                            <DropdownItem>
                                Visualizar
                            </DropdownItem>
                        </Link>
                        <Link to="/manager/proprietario/edit">
                            <DropdownItem>
                                Editar
                            </DropdownItem>
                        </Link>
                        <Link>
                            <DropdownItem onClick={openDeleteModal}>
                                Excluir
                            </DropdownItem>
                        </Link>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </td>
        </tr>
    )
};

export default Item;
