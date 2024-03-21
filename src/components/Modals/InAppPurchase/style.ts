import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,1)',
  },
  closeButton: {
    position: 'absolute',
    top: 60,
    right: 20,
    zIndex: 1,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  logo: {
    width: 200,
    height: 40,
    resizeMode: 'contain',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    width: '90%',
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    color: 'black',
    paddingHorizontal: 20,
  },
  promotionalVideoContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
});
