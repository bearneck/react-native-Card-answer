import { StyleSheet, Dimensions, Platform } from 'react-native';
import { colors } from 'example/src/styles/index.style';

const IS_IOS = Platform.OS === 'ios';
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

function wp (percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight * 0.36;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 8;

const entryBorderRadius = 8;

export default StyleSheet.create({
    slideInnerContainer: {
        width: itemWidth,
        height: slideHeight*2.3,
        paddingHorizontal: itemHorizontalMargin,
        paddingBottom: 18 // needed for shadow
    },
    shadow: {
        position: 'absolute',
        top: 0,
        left: itemHorizontalMargin,
        right: itemHorizontalMargin,
        bottom: 18,
        shadowColor: colors.black,
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 10,
        borderRadius: entryBorderRadius,
    },
    imageContainer: {
        flex: 0.5,
        marginBottom: IS_IOS ? 0 : -1, // Prevent a random Android rendering issue
        backgroundColor: 'black',
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
    },
    imageContainerEven: {
        backgroundColor: colors.black,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? entryBorderRadius : 0,
        borderTopLeftRadius: entryBorderRadius,
        borderTopRightRadius: entryBorderRadius,
        height:slideHeight,
    },
    // image's border radius is buggy on iOS; let's hack it!
    radiusMask: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: entryBorderRadius,
        backgroundColor: 'white'
    },
    radiusMaskEven: {
        backgroundColor: colors.black
    },
    textContainer: {
        flex:1,
        height:slideHeight*2,
        
        
        paddingHorizontal: 16,
        backgroundColor: 'white',
        borderBottomLeftRadius: entryBorderRadius,
        borderBottomRightRadius: entryBorderRadius,
    },
    textContainerEven: {
        backgroundColor: colors.black
    },
    title: {
        color: colors.black,
        fontSize: 17,
        fontWeight: 'bold',
        letterSpacing: 0.5
    },
    titleEven: {
        color: 'white'
    },
    subtitle: {
        marginTop: 10,
        color: colors.gray,
        fontSize: 16,
        fontStyle: 'italic',
        marginBottom:10,
    },
    scoreView:{
        justifyContent:'center',
        alignItems:'center',
    },
    subtitleEven: {
        color: 'rgba(255, 255, 255, 0.7)'
    },
    centerView:{
        alignItems:'center',
        justifyContent:'center',
    },
});
