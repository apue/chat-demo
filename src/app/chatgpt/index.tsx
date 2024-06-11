'use client';
import {ProChat} from '@ant-design/pro-chat';
import {useTheme} from 'antd-style';
import {useEffect, useState} from 'react';

export default function Home() {
  const theme = useTheme();
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => setShowComponent(true), []);

  return (
      <div
          style={{
            backgroundColor: theme.colorBgLayout,
          }}
      >
        {showComponent && (
            <ProChat
                displayMode={'docs'}
                style={{
                  height: '100vh',
                  width: '100vw',
                }}
                request={async (messages) => {
                  return await fetch('/api/openai', {
                    method: 'POST',
                    headers: {
                      "Content-Type": "application/json"
                    },
                    body: JSON.stringify({messages: messages}),
                  });
                }}
            />
        )}
      </div>
  );
}