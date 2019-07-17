import React from 'react';
import { withTheme } from 'styled-components';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from '@bootstrap-styled/v4';

import { Header } from './styles';
import { math } from 'shared/libs';

console.log(math.sum(2, 2));

const ModalAnimate = ({
    children,
    accepted,
    title,
    isOpen,
    handleClose,
    ...props
}) => {
    console.log('modal:', props);
    return (
        <React.Fragment>
            <Modal isOpen={isOpen} toggle={() => handleClose()}>
                <ModalHeader toggle={() => handleClose()}>
                    <Header> {title} </Header>
                </ModalHeader>
                <ModalBody>{children}</ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => handleClose()}>
                        Cancelar
                    </Button>
                    <Button color="secondary" onClick={() => accepted()}>
                        Aceptar
                    </Button>
                </ModalFooter>
            </Modal>
        </React.Fragment>
    );
};

export default withTheme(ModalAnimate);
