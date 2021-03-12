import React from 'react';
import { Lock, Shield, Smile } from 'react-feather';
import { Header } from './Header';
import { Page } from './Page';
import { Footer } from './Footer';
import { Jumbotron } from './Jumbotron';
import { Tagline } from './Tagline';
import { Columns } from './Columns';
import { Column } from './Column';
import { Icon } from './Icon';
import { Highlight } from './Highlight';

export function Home(): JSX.Element {
  return (
    <>
      <Header />
      <Jumbotron>
        <Tagline>
          <p>
            &quot;Always be yourself...
            <br />
            Unless you can be anonymous,
            <br />
            then always be anonymous.&quot;
          </p>
          <p>-Anonymous</p>
        </Tagline>
      </Jumbotron>
      <Page>
        <Columns>
          <Column>
            <h3>
              <Icon icon={Shield} /> Secure
            </h3>
            <p>
              Users never need to remember passwords. A new temporary one-time-password (OTP) is sent via email each
              time they sign in. No permanent password is ever stored, so there&apos;s no way to compromise any
              user&apos;s password.
            </p>
          </Column>
          <Column>
            <h3>
              <Icon icon={Lock} /> Private
            </h3>
            <p>
              User information is never collected. Even the user&apos;s email address is forgotten after the OTP is
              sent. A non-reversible hash is retained for recognizing returning users. Applications only receive a
              unique ID for each user.
            </p>
          </Column>
          <Column>
            <h3>
              <Icon icon={Smile} /> Easy
            </h3>
            <p>
              Users &quot;sign up&quot; the first time they sign in. There is no need for a separate sign up process.
            </p>
            <p>Control who signs in to your application by allowing or blocking email addresses and domains.</p>
          </Column>
        </Columns>

        <hr />

        <h2>How much does it cost?</h2>
        <p>The service is free for one application, 100 active users per day, and unlimited total users.</p>
        <p>
          You only ever pay for the users that are signed in each day. After the first 100, each additional active user
          is $0.005 (US) per day. You can set a limit to avoid uncontrolled costs. If 1,100 users sign in to your
          application today, that&apos;s only five dollars. Each users costs about 15 cents per month. So, if you make
          it big, you can easily offset the cost with a small subscription fee.
        </p>
        <p>Each additional application after the first is $5.00 (US) per month.</p>

        <hr />

        <h2>How do I get started?</h2>
        <p>
          First, click{' '}
          <a href="/manage" rel="noopener noreferrer">
            here
          </a>{' '}
          to register a new application. Once you have registered your application, copy the application ID. You&apos;ll
          need it when integrating AuthAnon into your application. It&apos;s free and no payment information is required
          to start.
        </p>
        <p>Next, add the client library to your application.</p>
        <Highlight language={'bash'}>{`
        # Using Yarn
        $ yarn add @authanon/frontend
        
        # Using NPM
        $ npm install @authanon/frontend
        `}</Highlight>
        <p>
          Then, import and configure the frontend library in your web application. This should be done as early as
          possible, and probably in the entry point (for example, in <code>src/index.ts</code>).
        </p>
        <Highlight language={'typescript'}>{`
        import AuthAnon from "@authanon/frontend";
        
        // Create an AuthAnon instance.
        const auth = new AuthAnon("<the app ID you copied during registration>");
        
        // This will handle responses from the AuthAnon sign in page after redirection,
        // and also restore the application URL to where the sign in process began.
        auth.resume()
        
          // The "resume" method returns a promise which only resolves after all
          // required redirects have completed. If your whole application is protected,
          // you can start the login process now. You can omit this if you're going to
          // sign in later to protect only part of your application.
          .then(() => auth.signIn())
        
          // The "signIn" method also returns a promise, which only resolves when a user
          // has successfully signed in.
          .then(() => {
            // Now render your application. If you're using React, you could call the
            // ReactDOM.render(...) method here.
          });
        `}</Highlight>
        <p>
          After a user is signed in, you can get their ID. If you try to get a user ID before a user is signed in,{' '}
          <code>null</code> will be returned.
        </p>
        <Highlight language={'typescript'}>{`
        const userId = auth.getUserId();
        `}</Highlight>
        <p>
          You can also get a JWT. If you try to get a JWT before the user is signed in, they will be asked to sign in.
          This returns a promise which only resolves when a user has signed in and a token has been acquired.
        </p>
        <Highlight language={'typescript'}>{`
        const jwt = await auth.getToken();
        `}</Highlight>
        <p>And finally, you can sign users out.</p>
        <Highlight language={'typescript'}>{`
        auth.signOut();
        `}</Highlight>
        <p>You are now an AuthAnon expert. Happy authenticating!</p>
      </Page>
      <Footer />
    </>
  );
}
