/*
 * SPDX-FileCopyrightText: 2022 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { angularOutputTarget } from '@stencil/angular-output-target';
import { Config } from '@stencil/core';
import { postcss } from '@stencil/postcss';
import { reactOutputTarget } from '@stencil/react-output-target';
import { sass } from '@stencil/sass';
import autoprefixer from 'autoprefixer';
export const config: Config = {
  bundles: [
    {
      components: ['ix-animated-tabs', 'ix-animated-tab'],
    },
    {
      components: ['ix-application-header'],
    },
    {
      components: ['ix-basic-navigation'],
    },
    {
      components: ['ix-blind'],
    },
    {
      components: ['ix-breadcrumb', 'ix-breadcrumb-item'],
    },
    {
      components: ['ix-button'],
    },
    {
      components: ['ix-category-filter'],
    },
    {
      components: ['ix-chip'],
    },
    {
      components: ['ix-counter-pill'],
    },
    {
      components: ['ix-drawer'],
    },
    {
      components: ['ix-dropdown', 'ix-dropdown-item'],
    },
    {
      components: ['ix-event-list', 'ix-event-list-item'],
    },
    {
      components: ['ix-expanding-search'],
    },
    {
      components: ['ix-filter-chip'],
    },
    {
      components: ['ix-flip-tile', 'ix-flip-tile-content'],
    },
    {
      components: ['ix-group', 'ix-group-dropdown-item', 'ix-group-item'],
    },
    {
      components: ['ix-icon'],
    },
    {
      components: ['ix-icon-button'],
    },
    {
      components: ['ix-input-group'],
    },
    {
      components: ['ix-map-navigation', 'ix-map-navigation-overlay'],
    },
    {
      components: [
        'ix-menu',
        'ix-menu-item',
        'ix-menu-about',
        'ix-menu-about-item',
        'ix-menu-about-news',
        'ix-menu-avatar',
        'ix-menu-avatar-item',
        'ix-menu-settings',
        'ix-menu-settings-item',
      ],
    },
    {
      components: ['ix-message-bar'],
    },
    {
      components: ['ix-modal', 'ix-modal-container'],
    },
    {
      components: ['ix-pill'],
    },
    {
      components: ['ix-select', 'ix-select-item'],
    },
    {
      components: ['ix-spinner'],
    },
    {
      components: ['ix-split-button', 'ix-split-button-item'],
    },
    {
      components: ['ix-tile'],
    },
    {
      components: ['ix-toast', 'ix-toast-container'],
    },
    {
      components: ['ix-toggle'],
    },
    {
      components: ['ix-tree', 'ix-tree-item'],
    },
    {
      components: ['ix-upload'],
    },
  ],
  extras: {
    appendChildSlotFix: true,
    slotChildNodesFix: true,
  },
  namespace: 'siemens-ix',
  globalStyle: './scss/ix.scss',
  minifyCss: false,
  plugins: [
    sass({
      includePaths: ['./scss'],
    }),
    postcss({
      plugins: [autoprefixer()],
    }),
  ],
  outputTargets: [
    angularOutputTarget({
      componentCorePackage: '@siemens/ix',
      directivesProxyFile: '../angular/src/components.ts',
      directivesArrayFile: '../angular/src/declare-components.ts',
      excludeComponents: ['my-component', 'ix-tree'],
    }),
    reactOutputTarget({
      componentCorePackage: '@siemens/ix',
      proxiesFile: '../react/src/components.ts',
      includeDefineCustomElements: true,
      excludeComponents: ['my-component', 'ix-tree', 'ix-tree-item'],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-json',
      file: 'dist/component-doc.json',
    },
    {
      type: 'docs-readme',
      footer: '',
      dependencies: false,
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      copy: [
        {
          src: './../../../node_modules/@siemens/ix-icons/dist',
          dest: 'build/ix-icons',
        },
        {
          // Temporary workaround until the brand theme is part of ix core
          src: './../../../node_modules/@siemens/ix-brand-theme/dist/ix-brand-theme',
          dest: 'build/ix-brand-theme',
        },
      ],
    },
  ],
};
