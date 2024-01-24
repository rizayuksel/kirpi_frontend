import React from 'react';
import {styled} from 'nativewind';
import {ScrollView} from 'react-native-gesture-handler';
import {View} from 'react-native';
import {CONTENT_SPACING} from '../../constants';

const StyledView = styled(View);

function Layout({children}) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{minHeight: CONTENT_SPACING}}>
      <StyledView className="p-4">{children}</StyledView>
    </ScrollView>
  );
}

export default Layout;
