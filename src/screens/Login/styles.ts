import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionsContainer: {
    width: '94%',
    gap: 10,
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFBB00',
    borderRadius: 10,
  },
  SignUpContainer: {
    alignItems: 'center',
    gap: 10,
    marginVertical: 20,
    width: '90%',
    transform: [{rotate: '1deg'}],
  },
  poweredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default styles;
