import { SvgXml } from "react-native-svg";
import { StarProp } from './evaluacion'
import { Pressable } from "react-native";

const xml = '<svg viewBox="0 0 24 24" id="star_outlined" data-name="star outlined" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill="none"></rect> <path id="Star" d="M10,15,4.122,18.09l1.123-6.545L.489,6.91l6.572-.955L10,0l2.939,5.955,6.572.955-4.755,4.635,1.123,6.545Z" transform="translate(2 3)" fill="none" stroke="#000000" stroke-miterlimit="10" stroke-width="1.5"></path> </g></svg>';

const StarEmpty = (props: StarProp) => {
    const handleOnPress = () =>{
        props.onClick(props.posicion);
    }
    return (
        <Pressable onPress={handleOnPress}>
            <SvgXml xml={xml} width={40} height={40} />
        </Pressable>
    );
}

export default StarEmpty;
