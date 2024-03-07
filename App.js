import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.intro}>
            <Image style={styles.logo} source={require('./assets/arman.png')}></Image>
            <View>
              <Text style={styles.title}>The Octocat</Text>
              <Text  style={styles.sub_title}>@octocat</Text>
              <Text style={styles.common_text_style}>Joined 25 Jan 2011</Text>
            </View>
          </View>
          <Text style={styles.common_text_style}>I am learning React Native from Saad Sir. The instructor sir explains core concepts in a easy way </Text>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f4f4f4",
  },
  common_text_style:{
    color:"#7c7c7d",
    fontSize:16,
    lineHeight:25,
  },
  card: {
    backgroundColor:"#fff",   
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius:20,
    paddingVertical:40,
    paddingHorizontal:20
  },
  intro:{
    flexDirection:"row",
    alignItems:'flex-end',
    marginBottom:30
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight:20
  },
  title:{
    fontSize:24,
    fontWeight:"bold"
  },
  sub_title:{
    color:"#4d61e8",
    fontSize:16,
    fontWeight:"bold",
    marginBottom:10
  },
  // paragraph
  
});
