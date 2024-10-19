import React, { useContext } from 'react'
import {
    Text,
    View,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
    StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { MoviesCards } from '../context1';
import { Ionicons } from "@expo/vector-icons";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import TicketComponent from '@/components/TicketComponent';
import Header from '@/components/Header';

const HomeScreen = () => {
    const navigation = useNavigation();
    const { ticket, movies }: any = useContext(MoviesCards)
    const data = movies;

    return (
        <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', width: '100%', padding: hp(1.3), paddingTop: hp(4.5) }}>
            <StatusBar barStyle='default' backgroundColor="blue" />
            <FlatList
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListHeaderComponent={ticket.length > 0 ? <TicketComponent /> : <Header />}
                data={data}
                style={{ width: "100%", }}
                contentContainerStyle={{
                }}
                renderItem={({ item }) => (
                    <Pressable style={{
                        width: "50%",
                        marginBottom: hp(1.4),
                        // backgroundColor: 'blue',
                        alignItems: 'center'
                    }}>
                        <View style={{ width: '97%' }}>
                            <View style={{
                                // aspectRatio: 1,
                                width: "100%",
                                height: hp(28),
                                overflow: 'hidden',
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }}
                                    source={{ uri: item.image }}
                                    resizeMode='stretch'

                                />
                            </View>
                            <Text
                                style={{
                                    fontSize: hp(2),
                                    fontWeight: "600",
                                    // width: 170,
                                    marginTop: hp(1),
                                }}
                            >
                                {item.name.substring(0, 16)}
                            </Text>

                            <Text style={{ marginTop: hp(.3), fontSize: hp(1.7), color: "gray" }}>
                                U/A • {item.language}
                            </Text>

                            <Text style={{
                                marginTop: hp(.3)
                                , fontSize: hp(1.7), fontWeight: "500"
                            }}>
                                {item.genre}
                            </Text>

                            <Pressable
                                onPress={() => {
                                    router.push({
                                        pathname: '/MovieScreen',
                                        params: {
                                            name: item.name,
                                            image: item.image,
                                        }
                                    });
                                }}

                                style={{
                                    backgroundColor: "#ffc40c",
                                    padding: hp(1),
                                    borderRadius: hp(.4),
                                    marginRight: hp(1),
                                    width: hp(12),
                                    marginTop: hp(1),
                                }}
                            >
                                <Text
                                    style={{ fontSize: hp(1.7), fontWeight: "500", textAlign: "center" }}
                                >
                                    BOOK
                                </Text>
                            </Pressable>
                        </View>
                    </Pressable>
                )
                }
            />
        </SafeAreaView >
    )
}

export default HomeScreen