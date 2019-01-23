import React, { Component } from 'react';
import {
    Linking,
} from "react-native";
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Text,
    Left,
    Right,
    Body,
    Separator,
    ListItem,
    Switch,
    List
} from "native-base";
import gStyles from "../../common/globalStyles";
import Color from "../../commonComponents/Color";
import Row from "../../commonComponents/Row";

export default class SettingScreen extends Component {

      // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            notice:false,
            chat:false,
            service:false
        };
      }

    clickFunc() {
         Linking.openURL("app-settings:").catch(err => console.log(err));
    }

    render() {
        return (
            <Container >
                <Header style={gStyles.container}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-back" style={{ color : "#000" }}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={gStyles.textAColor}>設置</Title>
                    </Body>
                    <Right/>
                </Header>

                <Content style={gStyles.cbg}>
                    <Separator bordered>
                        <Text >賬號</Text>
                    </Separator>
                    <List style={{backgroundColor:Color.white}} >
                    <ListItem  >
                        <Left>
                            <Text>活躍</Text>
                        </Left>
                        <Right>
                            <Row style={{borderRadius:10,backgroundColor:Color.gray,height:30}}>
                                <Text style={[gStyles.textAColor,{width:130,textAlign:'center',lineHeight:30}]}>GO On Hold</Text>
                            </Row>
                        </Right>
                    </ListItem>
                    </List>

                    <Separator>
                        <Text>推廣通知</Text>
                    </Separator>

                    <List style={{backgroundColor:Color.white}}>
                    <ListItem>
                        <Left>
                            <Text>每日中午提示</Text>
                        </Left>
                        <Right>
                            <Switch value={this.state.notice}   onChange={()=>{
                                this.clickFunc();
                                this.setState({notice:this.state.notice = !this.state.notice})}} />
                        </Right>
                    </ListItem>
                    </List>

                    <List style={{backgroundColor:Color.white}}>
                    <ListItem>
                        <Left>
                            <Text>聊天</Text>
                        </Left>
                        <Right>
                            <Switch value={this.state.chat} onChange={()=>{this.setState({chat:this.state.chat = !this.state.chat})}}/>
                        </Right>
                    </ListItem>
                    </List>

                    <List style={{backgroundColor:Color.white}}>
                    <ListItem last>
                        <Left>
                            <Text>顧客服務</Text>
                        </Left>
                        <Right>
                            <Switch value={this.state.service} onChange={()=>{this.setState({service:this.state.service = !this.state.service})}}/>
                        </Right>
                    </ListItem>
                    </List>

                    <Separator>
                        <Text>更多資訊</Text>
                    </Separator>
                    <List style={{backgroundColor:Color.white}}>
                    <ListItem  onPress={() => this.props.navigation.push("HelpScreen")}>
                        <Left>
                            <Text>隱私權限服務條款</Text>
                        </Left>
                         <Right>
                               <Icon name="arrow-forward"/>
                         </Right>
                    </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

