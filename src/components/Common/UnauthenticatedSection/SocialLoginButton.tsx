import {Button, Icon, Text} from '@rneui/themed';

interface IloginButtonProps {
  color: string;
  icon?: string;
  text: string;
  type?: string;
  tcolor?: string;
  onPress: () => any;
}

export default function SocialLoginButton({
  color,
  tcolor,
  icon,
  text,
  type,
  onPress,
}: IloginButtonProps) {
  return (
    <Button onPress={onPress} color={color}>
      <Icon type={type} color={tcolor} size={25} name={icon ?? 'email'} />
      <Text style={{color: tcolor, paddingHorizontal: 5}} h3>
        {text}
      </Text>
    </Button>
  );
}
