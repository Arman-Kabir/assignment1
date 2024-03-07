import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image style={styles.logo} source={require('./assets/arman.png')}></Image>
          <View>
            <Text>The Octocat</Text>
            <Text>@octocat</Text>
            <Text>Joined 25 Jan 2011</Text>
          </View>
        </View>
        <Text> I am learning React Native from Saad Sir. The instructor explains core concepts in a easy way and i can understand the lessons very easily. This is my first project in react native and i am enjoying the journey.    </Text>
        <View>
          <View>
            <Text>Repos</Text>
            <Text>8</Text>
          </View>
          <View>
            <Text>Followers</Text>
            <Text>3938</Text>
          </View>
          <View>
            <Text>Following</Text>
            <Text>9</Text>
          </View>
        </View>
        <View>
          <View>
            <Image source={require('./assets/map.png')}></Image>
            <Text>San Francisco</Text>
          </View>
          <View>
            <Image source={require('./assets/links.png')}></Image>
            <Text>https://github.blog</Text>
          </View>
          <View>
            <Image source={require('./assets/twitter.png')}></Image>
            <Text>Not available</Text>
          </View>
          <View>
            <Image source={require('./assets/building.png')}></Image>
            <Text>@github</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
    paddingTop: 50
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 50
  }
});
