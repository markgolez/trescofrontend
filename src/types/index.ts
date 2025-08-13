import {ThunkDispatch} from '@reduxjs/toolkit';
import {AnyAction} from 'redux';
import {ReactNode} from 'react';

export type AppDispatch = ThunkDispatch<any, any, AnyAction>;
export type SFC<P = {}> = React.FC<P & {className?: string}>; 