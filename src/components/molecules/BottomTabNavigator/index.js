import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { TabItem } from '..';
import { colors } from '../../../utils';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                    >
                        <TabItem type={label} isFocused={isFocused} />
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomTabNavigator

const styles = StyleSheet.create({
    container: {
        height: 62,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.accentColor4,
        paddingHorizontal: 53,
        paddingVertical: 12
    }
})
