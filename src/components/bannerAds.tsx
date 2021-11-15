import React, { useState, useEffect } from 'react';
import { BannerAd, BannerAdSize } from '@react-native-admob/admob';

const BannerAds = () => {
   return (
      <BannerAd
         size={BannerAdSize.ADAPTIVE_BANNER}
         unitId={'ca-app-pub-1678137107426089/8296374601'}
         onAdFailedToLoad={(error) => console.error(error)}
      />
   )
}

export default BannerAds