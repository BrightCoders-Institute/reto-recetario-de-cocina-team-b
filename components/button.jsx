import React, { useState } from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const likeButton = () => {
    const[likes, setLikes]=useState(0);

    const handleLike = () => {
        setLikes(likes + 1);
};

return(
<View>
    <TouchableOpacity onPress={handleLike}>
        <Text>Me gusta {likes}</Text>
    </TouchableOpacity>
</View>

);
};

export default likeButton;