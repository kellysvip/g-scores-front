import React from 'react';
import { screen } from '@testing-library/react';

import '@testing-library/jest-dom';

import DisplayErrors from '../index';

import { renderWithTestMockedWrapper } from '../../../tests/testUtils';

describe('#DisplayErrors', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should correctly render the error component', async () => {
    renderWithTestMockedWrapper(<DisplayErrors errorCode={403} />);

    expect(await screen.findByText('403')).toBeInTheDocument();
    expect(
      await screen.findByText(
        'Người dùng không có quyền truy cập vào trang này.',
      ),
    ).toBeInTheDocument();
  });

  it('should correctly render the default error message', async () => {
    renderWithTestMockedWrapper(<DisplayErrors errorCode={410} />);

    expect(await screen.findByText('410')).toBeInTheDocument();
    expect(
      await screen.findByText('Hệ thống đã xảy ra lỗi.'),
    ).toBeInTheDocument();
  });
});
