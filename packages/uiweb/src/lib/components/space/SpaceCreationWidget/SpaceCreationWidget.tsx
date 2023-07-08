import { useState } from 'react'
import styled from 'styled-components';
import * as PushAPI from '@pushprotocol/restapi';

import { SCWCreateModal } from './SCWCreateModal/SCWCreateModal'
import { SCWScheduleModal } from './SCWScheduleModal/SCWScheduleModal';
import { SCWInviteModal } from './SCWInviteModal/SCWInviteModal';
import { SCWButton } from './SCWButton';

import { useSpaceData } from '../../../hooks';

export interface ISpaceCreateWidgetProps {
    CustomComponent?: any;
}

export const SpaceCreationWidget:React.FC<ISpaceCreateWidgetProps> = (props) => {
    const { CustomComponent } = props;

    const [isCreateModalVisible, setIsCreateModalVisible] = useState(false);
    const [isScheduleModalVisible, setIsScheduleModalVisible] = useState(false);
    const [isInviteModalVisible, setIsInviteModalVisible] = useState(false);

    const [isLoading, setLoading] = useState(false);

    const [spaceState, setSpaceState] = useState({
        spaceName: '',
        spaceDescription: '',
        date: new Date(),
        time: new Date().getTime(),
    })

    const { signer } = useSpaceData();

    const handleNameChange = (event: any) => {
        setSpaceState((prevState) => ({...prevState, spaceName: event.target.value}))
    };

    const handleDescriptionChange = (event: any) => {
        setSpaceState((prevState) => ({...prevState, spaceDescription: event.target.value}))
    };

    const onDateChange = (dateValue: any) => {
        setSpaceState((prevState) => ({...prevState, date: dateValue}))
    };

    const onTimeChange = (event: any) => {
        setSpaceState((prevState) => ({...prevState, time: event.target.value}))
    };

    const showCreateSpace = () => {
        setIsCreateModalVisible(!isCreateModalVisible);
        setIsScheduleModalVisible(false);
        setIsInviteModalVisible(false);
    }

    const showScheduleSpace = () => {
        setIsScheduleModalVisible(!isScheduleModalVisible);
        setIsCreateModalVisible(false);
        setIsInviteModalVisible(false);
    }

    const showInviteSpace = () => {
        setIsInviteModalVisible(!isInviteModalVisible);
        setIsScheduleModalVisible(false);
        setIsCreateModalVisible(false);
    }

    const closeCreateModal = () => {
        setIsCreateModalVisible(false);
    }

    const closeScheduleModal = () => {
        setIsScheduleModalVisible(false);
    }

    const closeInviteModal = () => {
        setIsInviteModalVisible(false);
    }
    
    const testCreateSpace = async () => {
        const spaceCreate = {
            spaceName: spaceState.spaceName,
            spaceDescription: 'Push Space',
            members: [],
            spaceImage: 'asd',
            admins: [],
            isPublic: true,
            scheduleAt: spaceState.date,
            signer: signer as PushAPI.SignerType,
        }

        try {
            setLoading(true);
            const response = await PushAPI.space.create(spaceCreate);
    
            console.log(response);
        } catch (e:any) {
            console.error(e.message);
        } finally {
            setLoading(false);
            closeInviteModal();
        }
    };

    return (
        <SCWContainer>
            {
                CustomComponent
                ?
                <CustomComponent />
                :
                <SCWButton
                    onCreate={showCreateSpace}
                />
            }

            {spaceState.spaceName}
            {spaceState.date.toDateString()}
            {spaceState.time}

            {isCreateModalVisible &&
                <SCWCreateModal
                    isInviteVisible={showInviteSpace}
                    closeCreateModal={closeCreateModal}
                    nameValue={spaceState.spaceName}
                    descriptionValue={spaceState.spaceDescription}
                    handleNameChange={handleNameChange}
                    handleDescriptionChange={handleDescriptionChange}
                    isDescriptionEnabled={false}
                    isScheduleVisible={showScheduleSpace}
                />
            }

            {isScheduleModalVisible &&
                <SCWScheduleModal
                    closeScheduleModal={closeScheduleModal}
                    makeCreateVisible={showCreateSpace}
                    makeInviteVisible={showInviteSpace}
                    dateValue={spaceState.date}
                    timeValue={spaceState.time}
                    onDateChange={onDateChange}
                    onTimeChange={onTimeChange}
                />
            }

            {isInviteModalVisible &&
                <SCWInviteModal
                    closeInviteModal={closeInviteModal}
                    makeScheduleVisible={showCreateSpace}
                    createSpace={testCreateSpace}
                    isLoading={isLoading}
                />
            }
        </SCWContainer>
    )
}

const SCWContainer = styled.div`
    font-family: 'Strawford'; // update to fontFamily theme 
`;