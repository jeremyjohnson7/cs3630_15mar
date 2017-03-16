import React from 'react';

class Modal extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     visible: false;
        // };
    }

    render() {
        return (
            <div className={!this.props.visible ? 'modal-closed' : ''}>
                <div className="modal-container"></div>
                <div className="modal">
                    <div className="modal-header">
                        This is the popup
                    </div>
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    <div className="modal-footer">
                        <button onClick={this.handleClick}>
                            Open Modal
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;
