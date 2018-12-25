import React, { Component } from 'react';
import { Platform, View, ScrollView, Text, StatusBar, SafeAreaView,StyleSheet,TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from 'example/src/styles/SliderEntry.style';
import SliderEntry from 'example/src/components/SliderEntry';
import Shi from 'example/src/static/entries.json';

const IS_ANDROID = Platform.OS === 'android';

export default class example extends Component {
        constructor (props) {
        super(props);
        this.addscore = this.addscore.bind(this);
        this.noaddscore = this.noaddscore.bind(this);
        this.clearTimer = this.clearTimer.bind(this);
        this.state = {
          score:0,
          time:10,
        };
    }
    componentDidMount() {
   
    this.timer = setInterval(() => {
    this.setState({time:this.state.time-1});
    this.isTime();
    }, 1000);
    }
    isTime(){
      if(this.state.time == -1){
        this.noaddscore();

      }
    }
    clearTimer(){
      this.setState({time:666});
      this.timer && clearTimeout(this.timer);
      
    }
    componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
    }
   
    _renderLightItem ({item, index}) {
        return <SliderEntry 
        index={index}
        score={this.state.score} 
        data={item} even={false} 
        addscore={this.addscore}
        noaddscore={this.noaddscore}
        clearTimer={this.clearTimer}
         />;
        }
    
    addscore(){
      this.setState({time:10});
      this.setState({score:this.state.score+10});
       this._carousel.snapToNext();
    }
    noaddscore(){
      this.setState({time:10});
      this._carousel.snapToNext();
    }
    render () {
      
        return (

                <View style={styles.container}>
                    <StatusBar
                      translucent={true}
                      backgroundColor={'rgba(0, 0, 0, 0.3)'}
                      barStyle={'light-content'}
                    />
                <View style={styles.exampleContainerDark}>
                <View style={styles.TitleView}>
                <Text style={styles.title}>倒计时：{this.state.time}</Text>
              
                <Text style={styles.subtitle}>请选择出正确的选项</Text>
                <Text style={styles.subtitle}>您的得分：{this.state.score}</Text>
            
                </View>

                <Carousel
                  scrollEnabled={false}
                  ref={(c) => { this._carousel = c; }}
                  data={Shi.question}
                  renderItem={(item,index) => this._renderLightItem(item)}
                  sliderWidth={sliderWidth}
                  itemWidth={itemWidth}
                  containerCustomStyle={styles.slider}
                  contentContainerCustomStyle={styles.sliderContentContainer}
                  layout='tinder'
                  firstItem={0}

                                  />
            </View>
                </View>
        );
    }
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#B721FF',
    },
        exampleContainerDark: {
        flex:1,
        backgroundColor: '#1a1917',
      },
      TitleView:{
        marginTop: 20,
      },
        title: {
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.9)',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    titleDark: {
        color:  '#1a1917',
    },
    subtitle: {
        marginTop: 5,
        paddingHorizontal: 30,
        backgroundColor: 'transparent',
        color: 'rgba(255, 255, 255, 0.75)',
        fontSize: 13,
        fontStyle: 'italic',
        textAlign: 'center'
    },
        slider: {
        marginTop: 15,
        overflow: 'visible' // for custom animations
    },
        sliderContentContainer: {
        paddingVertical: 10 // for custom animation
    },

});
