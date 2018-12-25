import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity,Alert,ToastAndroid  } from 'react-native';
import PropTypes from 'prop-types';
import { ParallaxImage } from 'react-native-snap-carousel';
import styles from 'example/src/styles/SliderEntry.style';

export default class SliderEntry extends Component {

  
      constructor (props) {
        super(props);
        this.state = {
      
        };
    }


    static propTypes = {
        data: PropTypes.object.isRequired,
        even: PropTypes.bool,
        parallax: PropTypes.bool,
        parallaxProps: PropTypes.object
    };

       addscore = () => { // 此处使用箭头函数，避免bind绑定
        if (this.props.index==2) {
          this.clearTimer();
        }
        this.props.addscore();

       
    };
       noaddscore = () => { // 此处使用箭头函数，避免bind绑定
        if (this.props.index==2) {
          this.clearTimer();
        }
        this.props.noaddscore();
    };
        clearTimer = () => { // 此处使用箭头函数，避免bind绑定
        this.props.clearTimer();
    };

    get image () {
        const { data: { illustration }, parallax, parallaxProps, even, } = this.props;

        return (
            <Image
              source={{ uri: illustration }}
              style={styles.image}
            />
        );
    }

    upScore(){
      //上传分数

      Alert.alert("wow~","分数上传完毕");
    }
    check(){
      if (this.key==true) {
      ToastAndroid.showWithGravityAndOffset(
      "答对啦 +10分",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
        // alert("正确  +10分");
        this.addscore();
      }else {
      ToastAndroid.showWithGravityAndOffset(
      "再接再厉哟~",
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      25,
      50
    );
        // alert("错误");
        this.noaddscore();
      }

    }
    // componentDidMount(){
    //   const { data: { isques} } = this.props;
    //   if(isques=1){
    //     alert(isques);
    //     this.clearTimer();//最后一个界面不计时了
    //   }
    // }

    render () {
        const { data: { title, A,B,C,D,isques,tip }, even } = this.props;

        const uppercaseTitle = title ? (
            <Text
              style={[styles.title, even ? styles.titleEven : {}]}
              numberOfLines={2}
            >
                {this.props.index+1}.{ title.toUpperCase() }
            </Text>
        ) : false;

        isquesview = isques==1 ? (
                    <View style={[styles.textContainer,{justifyContent:'space-between',}]}>
                    { uppercaseTitle }
                    <View style={styles.ansView}>
                    <TouchableOpacity 
                    onPress={() => {this.key = A.key;this.check(); }}>
                    <Text
                      style={styles.subtitle}
                      numberOfLines={2}
                    >
                        A:{ A.ans }
                    </Text>

                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {this.key = B.key;this.check(); }}>
                                        <Text
                      style={styles.subtitle}
                      numberOfLines={2}
                    >
                        B:{ B.ans }
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {this.key = C.key;this.check(); }}>
                                        <Text
                      style={styles.subtitle}
                      numberOfLines={2}
                    >
                        C:{ C.ans }

                    </Text>
                     </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={() => {this.key = D.key;this.check(); }}>
                                        <Text
                      style={styles.subtitle}
                      numberOfLines={2}
                    >
                        D:{ D.ans }
                    </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={{alignItems:'flex-end'}}><Text style={styles.subtitle}>{tip}</Text></View>
                </View>
          ):(                          
                <View style={styles.textContainer}>
                <View style={styles.centerView}>
                     <Text
                      style={[styles.title,{fontSize:25}]}
                      numberOfLines={2}>
                      答题完毕
                     </Text>
                     </View>

                    <View style={[styles.scoreView,{marginTop:40,marginBottom:40,}]} >
                    <Text>您的得分：{this.props.score}</Text>
                    </View>
                    <TouchableOpacity 
                    style={[styles.centerView]}
                    onPress={() => {this.upScore()}}
                    >
                    <Text
                      style={styles.subtitle}>
                       点击上传分数
                    </Text>
      </TouchableOpacity>


                </View>
                );

        return (
            <TouchableOpacity
              activeOpacity={1}
              style={styles.slideInnerContainer}
              >
                <View style={styles.shadow} />
                <View style={styles.imageContainer}>
                    { this.image }
                <View style={styles.radiusMask} />
                </View>
                {isquesview}
                <View>
                <Text>{isques}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
