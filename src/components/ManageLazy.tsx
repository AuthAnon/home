import React from 'react';

export const ManageLazy = React.lazy(() => import('./Manage').then((module) => ({ default: module.Manage })));
