import { connect } from 'react-redux';

import { openSheet } from '../../../base/dialog/actions';
import { translate } from '../../../base/i18n';
import { IconInfoCircle } from '../../../base/icons';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';

import ConnectionStatusComponent from './ConnectionStatusComponent';

export type Props = AbstractButtonProps & {

    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Function,

    /**
     * The ID of the participant that this button is supposed to pin.
     */
    participantID: string,

    /**
     * The function to be used to translate i18n labels.
     */
    t: Function
};

/**
 * A remote video menu button which shows the connection statistics.
 */
class ConnectionStatusButton extends AbstractButton<Props, *> {
    icon = IconInfoCircle;
    label = 'videothumbnail.connectionInfo';

    /**
     * Handles clicking / pressing the button, and kicks the participant.
     *
     * @private
     * @returns {void}
     */
    _handleClick() {
        const { dispatch, participantID } = this.props;

        dispatch(openSheet(ConnectionStatusComponent, {
            participantID
        }));
    }
}

export default translate(connect()(ConnectionStatusButton));
