import React from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

import { default as modalTypes } from '../../entrance/components/modals';

const MODAL_TYPES = {
  alert: modalTypes.alertModalRcc,
  confirm: modalTypes.confirmModal,
  delete: modalTypes.deleteModal,
  prompt: modalTypes.promptModal
};

const mapStateToProps = state => ({
  ...state.modal
});

class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({
        modalIsOpen: nextProps.modalProps.open
      });
    }
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    if (!this.props.modalType) {
      return null;
    }
    const SpecifiedModal = MODAL_TYPES[this.props.modalType];
    return (
      <div>
        <ReactModal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="Example Modal"
          ariaHideApp={false}
          overlayClassName="modal fade show"
          bodyOpenClassName="modal-open-z"
          className="modal-dialog-z modal-dialog-centered-z"
        >
          <SpecifiedModal
            closeModal={this.closeModal}
            {...this.props.modalProps}
          />
        </ReactModal>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  null
)(ModalContainer);
