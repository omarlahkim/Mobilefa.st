import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
    borderRadius: 50,
    backgroundColor: 'rgba(255,255,255,.1)',
    padding: 5,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    paddingHorizontal: 20,
  },
  listContainer: {
    flex: 2,
    justifyContent: 'center',
    width: '100%',
    color: 'black',
    paddingHorizontal: 20,
    gap: 10,
  },
  promotionalVideoContainer: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
  },
});
