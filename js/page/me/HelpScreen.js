import React, { Component } from "react";

import {
    StyleSheet,
    Text,
    View,
    Image,
    WebView
} from 'react-native';

import styles from "../reg/styles";
import gStyles from "../../common/globalStyles";
import {
    Container,
    Header,
    Title,
    Content,

    Left,
    Right,
    Body,

    Icon,
    Button,

} from "native-base";
import { screenH, screenW } from "../../commonComponents/CommonUtil";

export default class HelpScreen extends Component {
    render() {
        return (
            <Container style={gStyles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{color: "#000"}}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>Help</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content >
                    <WebView
                        bounces={true}
                        scalesPageToFit={true}
                        source={{ uri: 'https://www.jianshu.com' }}
                        onError={() => this.setState({ isError: true })}

                        startInLoadingState={true}
                        style={{
                            width: screenW,
                            height: screenH
                        }}
                    />

                </Content>

            </Container>

        );
    }
}

