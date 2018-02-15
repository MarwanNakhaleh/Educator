import React from 'react';
import {Text, View, Modal} from 'react-native';
// avoid cyclical dependencies, importing from index.js
import {CardSection} from './CardSection';
import {Button} from './Button';

// passing a function without parentheses means don't call immediately

const ModalConfirm = ({ children, visible, onAccept, onReject }) => {
    const {cardSectionStyle, textStyle, containerStyle} = styles;

    return(
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => {}}
        >
            <View style={containerStyle}>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>
                        {children}
                    </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={onAccept}>
                        Yes
                    </Button>
                    <Button onPress={onReject}>
                        No
                    </Button>
                </CardSection>
            </View>
        </Modal>
    )
}

const styles = {
    cardSectionStyle: {
        justifyContent: 'center',
    },
    textStyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(48, 48, 48, 0.75)',
        position: 'relative',
        flex: 1,
        justifyContent: 'center'
    }
}

export {ModalConfirm};