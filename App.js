import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.card}>
          <View style={[styles.intro, styles.bottom_margin]}>
            <Image style={styles.logo} source={require('./assets/arman.png')}></Image>
            <View>
              <Text style={styles.title}>The Octocat</Text>
              <Text style={styles.sub_title}>@octocat</Text>
              <Text style={styles.text_style}>Joined 25 Jan 2011</Text>
            </View>
          </View>
          <Text style={[styles.text_style, styles.bottom_margin]}>I am learning React Native from Saad Sir. The instructor sir explains core concepts in a easy way </Text>

          {/* stat */}
          <View style={[styles.stats, styles.bottom_margin]}>
            <View style={styles.stat_element}>
              <Text style={styles.text_style}>Repos</Text>
              <Text style={styles.stat_value}>8</Text>
            </View>
            <View style={styles.stat_element}>
              <Text style={styles.text_style}>Followers</Text>
              <Text style={styles.stat_value}>3938</Text>
            </View>
            <View style={styles.stat_element}>
              <Text style={styles.text_style}>Following</Text>
              <Text style={styles.stat_value}>9</Text>
            </View>
          </View>

          {/* contact */}
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
  text_style: {
    color: "#7c7c7d",
    fontSize: 16,
    lineHeight: 25,
  },
  bottom_margin: {
    marginBottom: 30
  },
  card: {
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
  stat_value: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 16
  }

  // contact

});
