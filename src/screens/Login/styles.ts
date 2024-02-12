import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  OrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  OrDivider: {
    width: 100,
    height: 2,
    backgroundColor: 'black',
  },
  actionsContainer: {
    width: '94%',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    gap: 5,
    padding: 20,
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
});

export default styles;
