import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={styles.card}>

          {/* Intro */}
          <View style={[styles.intro, styles.bottom_margin]}>
            <Image style={styles.logo} source={require('./assets/arman.png')}></Image>
            <View>
              <Text style={styles.title}>The Octocat</Text>
              <Text style={styles.sub_title}>@octocat</Text>
              <Text style={styles.text_style}>Joined 25 Jan 2011</Text>
            </View>
          </View>

          {/* Text */}
          <Text style={[styles.text_style, styles.bottom_margin]}>I am learning React Native from Saad Sir. The instructor sir explains core concepts in a easy way </Text>

          {/* stat */}
          <View style={[styles.stats, styles.bottom_margin]}>

            <View style={styles.stat_element}>
              <Text style={[styles.text_style, styles.stat_key]}>Repos</Text>
              <Text style={styles.stat_value}>8</Text>
            </View>

            <View style={styles.stat_element}>
              <Text style={[styles.text_style, styles.stat_key]}>Followers</Text>
              <Text style={styles.stat_value}>3938</Text>
            </View>

            <View style={styles.stat_element}>
              <Text style={[styles.text_style, styles.stat_key]}>Following</Text>
              <Text style={styles.stat_value}>9</Text>
            </View>
          </View>

          {/* contact */}
          <View>
            <View style={styles.contact}>
              <Image style={styles.contactImage} source={require('./assets/map.png')}></Image>
              <Text style={styles.text_style}>San Francisco</Text>
            </View>

            <View style={styles.contact}>
              <Image style={styles.contactImage} source={require('./assets/links.png')}></Image>
              <Text style={styles.text_style}>https://github.blog</Text>
            </View>

            <View style={styles.contact}>
              <Image style={styles.contactImage} source={require('./assets/twitter.png')}></Image>
              <Text style={[styles.text_style, styles.mute_text]}>Not available</Text>
            </View>

            <View style={styles.contact}>
              <Image style={styles.contactImage} source={require('./assets/building.png')}></Image>
              <Text style={styles.text_style}>@github</Text>
            </View>

          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    color: '#f4f4f4',
    height:1000
  },
  text_style: {
    color: "#797d9c",
    fontSize: 16,
    lineHeight: 25,
  },
  mute_text: {
    color: '#daddf5'
  },
  bottom_margin: {
    marginBottom: 30
  },

  card: {
    color: '#f4f4f4',
    backgroundColor: "#fff",
    marginHorizontal: 30,
    marginVertical: 50,
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 20
  },
  intro: {
    flexDirection: "row",
    alignItems: 'flex-end',
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 50,
    marginRight: 20
  },
  title: {
    fontSize: 24,
    fontWeight: "bold"
  },
  sub_title: {
    color: "#4d61e8",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10
  },
  // stats
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    backgroundColor: "#f4f4f4",
    borderRadius: 20
  },
  stat_element: {
    alignItems: 'center'
  },
  stat_key: {
    fontSize: 14
  },
  stat_value: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  },

  // contact
  contact: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10
  },
  contactImage: {
  
    marginRight: 20
  }

});
