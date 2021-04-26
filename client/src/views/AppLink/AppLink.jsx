// eslint-disable-next-line
import React from 'react';
import { Redirect } from 'react-router-dom';

export default function AppLink(props) {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  if (/android/i.test(userAgent)) {
    return window.location.replace(
      'https://play.google.com/store/apps/details?id=com.buzzwordlabs.pepper'
    );
  }

  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return window.location.replace(
      'https://apps.apple.com/us/app/pepper-robocall-blocker/id1487400263'
    );
  }

  return <Redirect to="/" />;
}
