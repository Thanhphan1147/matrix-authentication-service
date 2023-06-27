/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * Implement the DateTime<Utc> scalar
   *
   * The input/output is a string in RFC3339 format.
   */
  DateTime: { input: any; output: any };
  /** URL is a String implementing the [URL Standard](http://url.spec.whatwg.org/) */
  Url: { input: any; output: any };
};

/** The input for the `addEmail` mutation */
export type AddEmailInput = {
  /** The email address to add */
  email: Scalars["String"]["input"];
  /** The ID of the user to add the email address to */
  userId: Scalars["ID"]["input"];
};

/** The payload of the `addEmail` mutation */
export type AddEmailPayload = {
  __typename?: "AddEmailPayload";
  /** The email address that was added */
  email?: Maybe<UserEmail>;
  /** Status of the operation */
  status: AddEmailStatus;
  /** The user to whom the email address was added */
  user?: Maybe<User>;
};

/** The status of the `addEmail` mutation */
export enum AddEmailStatus {
  /** The email address was added */
  Added = "ADDED",
  /** The email address already exists */
  Exists = "EXISTS",
  /** The email address is invalid */
  Invalid = "INVALID",
}

export type Anonymous = Node & {
  __typename?: "Anonymous";
  id: Scalars["ID"]["output"];
};

/**
 * An authentication records when a user enter their credential in a browser
 * session.
 */
export type Authentication = CreationEvent &
  Node & {
    __typename?: "Authentication";
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** ID of the object. */
    id: Scalars["ID"]["output"];
  };

/** A browser session represents a logged in user in a browser. */
export type BrowserSession = CreationEvent &
  Node & {
    __typename?: "BrowserSession";
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** ID of the object. */
    id: Scalars["ID"]["output"];
    /** The most recent authentication of this session. */
    lastAuthentication?: Maybe<Authentication>;
    /** The user logged in this session. */
    user: User;
  };

export type BrowserSessionConnection = {
  __typename?: "BrowserSessionConnection";
  /** A list of edges. */
  edges: Array<BrowserSessionEdge>;
  /** A list of nodes. */
  nodes: Array<BrowserSession>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type BrowserSessionEdge = {
  __typename?: "BrowserSessionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: BrowserSession;
};

/**
 * A compat session represents a client session which used the legacy Matrix
 * login API.
 */
export type CompatSession = CreationEvent &
  Node & {
    __typename?: "CompatSession";
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** The Matrix Device ID of this session. */
    deviceId: Scalars["String"]["output"];
    /** When the session ended. */
    finishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** ID of the object. */
    id: Scalars["ID"]["output"];
    /** The user authorized for this session. */
    user: User;
  };

/**
 * A compat SSO login represents a login done through the legacy Matrix login
 * API, via the `m.login.sso` login method.
 */
export type CompatSsoLogin = Node & {
  __typename?: "CompatSsoLogin";
  /** When the object was created. */
  createdAt: Scalars["DateTime"]["output"];
  /** When the client exchanged the login token sent during the redirection. */
  exchangedAt?: Maybe<Scalars["DateTime"]["output"]>;
  /**
   * When the login was fulfilled, and the user was redirected back to the
   * client.
   */
  fulfilledAt?: Maybe<Scalars["DateTime"]["output"]>;
  /** ID of the object. */
  id: Scalars["ID"]["output"];
  /** The redirect URI used during the login. */
  redirectUri: Scalars["Url"]["output"];
  /** The compat session which was started by this login. */
  session?: Maybe<CompatSession>;
};

export type CompatSsoLoginConnection = {
  __typename?: "CompatSsoLoginConnection";
  /** A list of edges. */
  edges: Array<CompatSsoLoginEdge>;
  /** A list of nodes. */
  nodes: Array<CompatSsoLogin>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CompatSsoLoginEdge = {
  __typename?: "CompatSsoLoginEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: CompatSsoLogin;
};

/** An object with a creation date. */
export type CreationEvent = {
  /** When the object was created. */
  createdAt: Scalars["DateTime"]["output"];
};

/** The input of the `endBrowserSession` mutation. */
export type EndBrowserSessionInput = {
  /** The ID of the session to end. */
  browserSessionId: Scalars["ID"]["input"];
};

export type EndBrowserSessionPayload = {
  __typename?: "EndBrowserSessionPayload";
  /** Returns the ended session. */
  browserSession?: Maybe<BrowserSession>;
  /** The status of the mutation. */
  status: EndBrowserSessionStatus;
};

/** The status of the `endBrowserSession` mutation. */
export enum EndBrowserSessionStatus {
  /** The session was ended. */
  Ended = "ENDED",
  /** The session was not found. */
  NotFound = "NOT_FOUND",
}

/** The input of the `endCompatSession` mutation. */
export type EndCompatSessionInput = {
  /** The ID of the session to end. */
  compatSessionId: Scalars["ID"]["input"];
};

export type EndCompatSessionPayload = {
  __typename?: "EndCompatSessionPayload";
  /** Returns the ended session. */
  compatSession?: Maybe<CompatSession>;
  /** The status of the mutation. */
  status: EndCompatSessionStatus;
};

/** The status of the `endCompatSession` mutation. */
export enum EndCompatSessionStatus {
  /** The session was ended. */
  Ended = "ENDED",
  /** The session was not found. */
  NotFound = "NOT_FOUND",
}

/** The input of the `endOauth2Session` mutation. */
export type EndOAuth2SessionInput = {
  /** The ID of the session to end. */
  oauth2SessionId: Scalars["ID"]["input"];
};

export type EndOAuth2SessionPayload = {
  __typename?: "EndOAuth2SessionPayload";
  /** Returns the ended session. */
  oauth2Session?: Maybe<Oauth2Session>;
  /** The status of the mutation. */
  status: EndOAuth2SessionStatus;
};

/** The status of the `endOauth2Session` mutation. */
export enum EndOAuth2SessionStatus {
  /** The session was ended. */
  Ended = "ENDED",
  /** The session was not found. */
  NotFound = "NOT_FOUND",
}

export type MatrixUser = {
  __typename?: "MatrixUser";
  /** The avatar URL of the user, if any. */
  avatarUrl?: Maybe<Scalars["String"]["output"]>;
  /** The display name of the user, if any. */
  displayName?: Maybe<Scalars["String"]["output"]>;
  /** The Matrix ID of the user. */
  mxid: Scalars["String"]["output"];
};

/** The mutations root of the GraphQL interface. */
export type Mutation = {
  __typename?: "Mutation";
  /** Add an email address to the specified user */
  addEmail: AddEmailPayload;
  endBrowserSession: EndBrowserSessionPayload;
  endCompatSession: EndCompatSessionPayload;
  endOauth2Session: EndOAuth2SessionPayload;
  /** Remove an email address */
  removeEmail: RemoveEmailPayload;
  /** Send a verification code for an email address */
  sendVerificationEmail: SendVerificationEmailPayload;
  /** Set an email address as primary */
  setPrimaryEmail: SetPrimaryEmailPayload;
  /** Submit a verification code for an email address */
  verifyEmail: VerifyEmailPayload;
};

/** The mutations root of the GraphQL interface. */
export type MutationAddEmailArgs = {
  input: AddEmailInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationEndBrowserSessionArgs = {
  input: EndBrowserSessionInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationEndCompatSessionArgs = {
  input: EndCompatSessionInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationEndOauth2SessionArgs = {
  input: EndOAuth2SessionInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationRemoveEmailArgs = {
  input: RemoveEmailInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationSendVerificationEmailArgs = {
  input: SendVerificationEmailInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationSetPrimaryEmailArgs = {
  input: SetPrimaryEmailInput;
};

/** The mutations root of the GraphQL interface. */
export type MutationVerifyEmailArgs = {
  input: VerifyEmailInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars["ID"]["output"];
};

/** An OAuth 2.0 client */
export type Oauth2Client = Node & {
  __typename?: "Oauth2Client";
  /** OAuth 2.0 client ID */
  clientId: Scalars["String"]["output"];
  /** Client name advertised by the client. */
  clientName?: Maybe<Scalars["String"]["output"]>;
  /** Client URI advertised by the client. */
  clientUri?: Maybe<Scalars["Url"]["output"]>;
  /** ID of the object. */
  id: Scalars["ID"]["output"];
  /** Privacy policy URI advertised by the client. */
  policyUri?: Maybe<Scalars["Url"]["output"]>;
  /** List of redirect URIs used for authorization grants by the client. */
  redirectUris: Array<Scalars["Url"]["output"]>;
  /** Terms of services URI advertised by the client. */
  tosUri?: Maybe<Scalars["Url"]["output"]>;
};

/**
 * An OAuth 2.0 session represents a client session which used the OAuth APIs
 * to login.
 */
export type Oauth2Session = CreationEvent &
  Node & {
    __typename?: "Oauth2Session";
    /** The browser session which started this OAuth 2.0 session. */
    browserSession: BrowserSession;
    /** OAuth 2.0 client used by this session. */
    client: Oauth2Client;
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** When the session ended. */
    finishedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** ID of the object. */
    id: Scalars["ID"]["output"];
    /** Scope granted for this session. */
    scope: Scalars["String"]["output"];
    /** User authorized for this session. */
    user: User;
  };

export type Oauth2SessionConnection = {
  __typename?: "Oauth2SessionConnection";
  /** A list of edges. */
  edges: Array<Oauth2SessionEdge>;
  /** A list of nodes. */
  nodes: Array<Oauth2Session>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type Oauth2SessionEdge = {
  __typename?: "Oauth2SessionEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: Oauth2Session;
};

/** Information about pagination in a connection */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** The query root of the GraphQL interface. */
export type Query = {
  __typename?: "Query";
  /** Fetch a browser session by its ID. */
  browserSession?: Maybe<BrowserSession>;
  /**
   * Get the current logged in browser session
   * @deprecated Use `viewerSession` instead.
   */
  currentBrowserSession?: Maybe<BrowserSession>;
  /**
   * Get the current logged in user
   * @deprecated Use `viewer` instead.
   */
  currentUser?: Maybe<User>;
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetch an OAuth 2.0 client by its ID. */
  oauth2Client?: Maybe<Oauth2Client>;
  /** Fetch an upstream OAuth 2.0 link by its ID. */
  upstreamOauth2Link?: Maybe<UpstreamOAuth2Link>;
  /** Fetch an upstream OAuth 2.0 provider by its ID. */
  upstreamOauth2Provider?: Maybe<UpstreamOAuth2Provider>;
  /** Get a list of upstream OAuth 2.0 providers. */
  upstreamOauth2Providers: UpstreamOAuth2ProviderConnection;
  /** Fetch a user by its ID. */
  user?: Maybe<User>;
  /** Fetch a user email by its ID. */
  userEmail?: Maybe<UserEmail>;
  /** Get the viewer */
  viewer: Viewer;
  /** Get the viewer's session */
  viewerSession: ViewerSession;
};

/** The query root of the GraphQL interface. */
export type QueryBrowserSessionArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryNodeArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryOauth2ClientArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryUpstreamOauth2LinkArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryUpstreamOauth2ProviderArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryUpstreamOauth2ProvidersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** The query root of the GraphQL interface. */
export type QueryUserArgs = {
  id: Scalars["ID"]["input"];
};

/** The query root of the GraphQL interface. */
export type QueryUserEmailArgs = {
  id: Scalars["ID"]["input"];
};

/** The input for the `removeEmail` mutation */
export type RemoveEmailInput = {
  /** The ID of the email address to remove */
  userEmailId: Scalars["ID"]["input"];
};

/** The payload of the `removeEmail` mutation */
export type RemoveEmailPayload = {
  __typename?: "RemoveEmailPayload";
  /** The email address that was removed */
  email?: Maybe<UserEmail>;
  /** Status of the operation */
  status: RemoveEmailStatus;
  /** The user to whom the email address belonged */
  user?: Maybe<User>;
};

/** The status of the `removeEmail` mutation */
export enum RemoveEmailStatus {
  /** The email address was not found */
  NotFound = "NOT_FOUND",
  /** Can't remove the primary email address */
  Primary = "PRIMARY",
  /** The email address was removed */
  Removed = "REMOVED",
}

/** The input for the `sendVerificationEmail` mutation */
export type SendVerificationEmailInput = {
  /** The ID of the email address to verify */
  userEmailId: Scalars["ID"]["input"];
};

/** The payload of the `sendVerificationEmail` mutation */
export type SendVerificationEmailPayload = {
  __typename?: "SendVerificationEmailPayload";
  /** The email address to which the verification email was sent */
  email: UserEmail;
  /** Status of the operation */
  status: SendVerificationEmailStatus;
  /** The user to whom the email address belongs */
  user: User;
};

/** The status of the `sendVerificationEmail` mutation */
export enum SendVerificationEmailStatus {
  /** The email address is already verified */
  AlreadyVerified = "ALREADY_VERIFIED",
  /** The verification email was sent */
  Sent = "SENT",
}

/** The input for the `setPrimaryEmail` mutation */
export type SetPrimaryEmailInput = {
  /** The ID of the email address to set as primary */
  userEmailId: Scalars["ID"]["input"];
};

/** The payload of the `setPrimaryEmail` mutation */
export type SetPrimaryEmailPayload = {
  __typename?: "SetPrimaryEmailPayload";
  status: SetPrimaryEmailStatus;
  /** The user to whom the email address belongs */
  user?: Maybe<User>;
};

/** The status of the `setPrimaryEmail` mutation */
export enum SetPrimaryEmailStatus {
  /** The email address was not found */
  NotFound = "NOT_FOUND",
  /** The email address was set as primary */
  Set = "SET",
  /** Can't make an unverified email address primary */
  Unverified = "UNVERIFIED",
}

export type UpstreamOAuth2Link = CreationEvent &
  Node & {
    __typename?: "UpstreamOAuth2Link";
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** ID of the object. */
    id: Scalars["ID"]["output"];
    /** The provider for which this link is. */
    provider: UpstreamOAuth2Provider;
    /** Subject used for linking */
    subject: Scalars["String"]["output"];
    /** The user to which this link is associated. */
    user?: Maybe<User>;
  };

export type UpstreamOAuth2LinkConnection = {
  __typename?: "UpstreamOAuth2LinkConnection";
  /** A list of edges. */
  edges: Array<UpstreamOAuth2LinkEdge>;
  /** A list of nodes. */
  nodes: Array<UpstreamOAuth2Link>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UpstreamOAuth2LinkEdge = {
  __typename?: "UpstreamOAuth2LinkEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: UpstreamOAuth2Link;
};

export type UpstreamOAuth2Provider = CreationEvent &
  Node & {
    __typename?: "UpstreamOAuth2Provider";
    /** Client ID used for this provider. */
    clientId: Scalars["String"]["output"];
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** ID of the object. */
    id: Scalars["ID"]["output"];
    /** OpenID Connect issuer URL. */
    issuer: Scalars["String"]["output"];
  };

export type UpstreamOAuth2ProviderConnection = {
  __typename?: "UpstreamOAuth2ProviderConnection";
  /** A list of edges. */
  edges: Array<UpstreamOAuth2ProviderEdge>;
  /** A list of nodes. */
  nodes: Array<UpstreamOAuth2Provider>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UpstreamOAuth2ProviderEdge = {
  __typename?: "UpstreamOAuth2ProviderEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: UpstreamOAuth2Provider;
};

/** A user is an individual's account. */
export type User = Node & {
  __typename?: "User";
  /** Get the list of active browser sessions, chronologically sorted */
  browserSessions: BrowserSessionConnection;
  /** Get the list of compatibility SSO logins, chronologically sorted */
  compatSsoLogins: CompatSsoLoginConnection;
  /** Get the list of emails, chronologically sorted */
  emails: UserEmailConnection;
  /** ID of the object. */
  id: Scalars["ID"]["output"];
  /** Access to the user's Matrix account information. */
  matrix: MatrixUser;
  /** Get the list of OAuth 2.0 sessions, chronologically sorted */
  oauth2Sessions: Oauth2SessionConnection;
  /** Primary email address of the user. */
  primaryEmail?: Maybe<UserEmail>;
  /** Get the list of upstream OAuth 2.0 links */
  upstreamOauth2Links: UpstreamOAuth2LinkConnection;
  /** Username chosen by the user. */
  username: Scalars["String"]["output"];
};

/** A user is an individual's account. */
export type UserBrowserSessionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user is an individual's account. */
export type UserCompatSsoLoginsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user is an individual's account. */
export type UserEmailsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user is an individual's account. */
export type UserOauth2SessionsArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user is an individual's account. */
export type UserUpstreamOauth2LinksArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
};

/** A user email address */
export type UserEmail = CreationEvent &
  Node & {
    __typename?: "UserEmail";
    /**
     * When the email address was confirmed. Is `null` if the email was never
     * verified by the user.
     */
    confirmedAt?: Maybe<Scalars["DateTime"]["output"]>;
    /** When the object was created. */
    createdAt: Scalars["DateTime"]["output"];
    /** Email address */
    email: Scalars["String"]["output"];
    /** ID of the object. */
    id: Scalars["ID"]["output"];
  };

export type UserEmailConnection = {
  __typename?: "UserEmailConnection";
  /** A list of edges. */
  edges: Array<UserEmailEdge>;
  /** A list of nodes. */
  nodes: Array<UserEmail>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** Identifies the total count of items in the connection. */
  totalCount: Scalars["Int"]["output"];
};

/** An edge in a connection. */
export type UserEmailEdge = {
  __typename?: "UserEmailEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node: UserEmail;
};

/** The input for the `verifyEmail` mutation */
export type VerifyEmailInput = {
  /** The verification code */
  code: Scalars["String"]["input"];
  /** The ID of the email address to verify */
  userEmailId: Scalars["ID"]["input"];
};

/** The payload of the `verifyEmail` mutation */
export type VerifyEmailPayload = {
  __typename?: "VerifyEmailPayload";
  /** The email address that was verified */
  email?: Maybe<UserEmail>;
  /** Status of the operation */
  status: VerifyEmailStatus;
  /** The user to whom the email address belongs */
  user?: Maybe<User>;
};

/** The status of the `verifyEmail` mutation */
export enum VerifyEmailStatus {
  /** The email address was already verified before */
  AlreadyVerified = "ALREADY_VERIFIED",
  /** The verification code is invalid */
  InvalidCode = "INVALID_CODE",
  /** The email address was just verified */
  Verified = "VERIFIED",
}

/** Represents the current viewer */
export type Viewer = Anonymous | User;

/** Represents the current viewer's session */
export type ViewerSession = Anonymous | BrowserSession;

export type CurrentViewerQueryQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentViewerQueryQuery = {
  __typename?: "Query";
  viewer:
    | { __typename: "Anonymous"; id: string }
    | { __typename: "User"; id: string };
};

export type CurrentViewerSessionQueryQueryVariables = Exact<{
  [key: string]: never;
}>;

export type CurrentViewerSessionQueryQuery = {
  __typename?: "Query";
  viewerSession:
    | { __typename: "Anonymous"; id: string }
    | { __typename: "BrowserSession"; id: string };
};

export type AddEmailMutationVariables = Exact<{
  userId: Scalars["ID"]["input"];
  email: Scalars["String"]["input"];
}>;

export type AddEmailMutation = {
  __typename?: "Mutation";
  addEmail: {
    __typename?: "AddEmailPayload";
    status: AddEmailStatus;
    email?:
      | ({ __typename?: "UserEmail"; id: string } & {
          " $fragmentRefs"?: {
            UserEmail_EmailFragment: UserEmail_EmailFragment;
          };
        })
      | null;
  };
};

export type BrowserSession_SessionFragment = {
  __typename?: "BrowserSession";
  id: string;
  createdAt: any;
  lastAuthentication?: {
    __typename?: "Authentication";
    id: string;
    createdAt: any;
  } | null;
} & { " $fragmentName"?: "BrowserSession_SessionFragment" };

export type EndBrowserSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type EndBrowserSessionMutation = {
  __typename?: "Mutation";
  endBrowserSession: {
    __typename?: "EndBrowserSessionPayload";
    status: EndBrowserSessionStatus;
    browserSession?:
      | ({ __typename?: "BrowserSession"; id: string } & {
          " $fragmentRefs"?: {
            BrowserSession_SessionFragment: BrowserSession_SessionFragment;
          };
        })
      | null;
  };
};

export type BrowserSessionListQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type BrowserSessionListQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    browserSessions: {
      __typename?: "BrowserSessionConnection";
      edges: Array<{
        __typename?: "BrowserSessionEdge";
        cursor: string;
        node: { __typename?: "BrowserSession"; id: string } & {
          " $fragmentRefs"?: {
            BrowserSession_SessionFragment: BrowserSession_SessionFragment;
          };
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  } | null;
};

export type CompatSsoLogin_LoginFragment = {
  __typename?: "CompatSsoLogin";
  id: string;
  redirectUri: any;
  createdAt: any;
  session?:
    | ({
        __typename?: "CompatSession";
        id: string;
        createdAt: any;
        deviceId: string;
        finishedAt?: any | null;
      } & {
        " $fragmentRefs"?: {
          CompatSsoLogin_SessionFragment: CompatSsoLogin_SessionFragment;
        };
      })
    | null;
} & { " $fragmentName"?: "CompatSsoLogin_LoginFragment" };

export type CompatSsoLogin_SessionFragment = {
  __typename?: "CompatSession";
  id: string;
  createdAt: any;
  deviceId: string;
  finishedAt?: any | null;
} & { " $fragmentName"?: "CompatSsoLogin_SessionFragment" };

export type EndCompatSessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type EndCompatSessionMutation = {
  __typename?: "Mutation";
  endCompatSession: {
    __typename?: "EndCompatSessionPayload";
    status: EndCompatSessionStatus;
    compatSession?:
      | ({ __typename?: "CompatSession"; id: string } & {
          " $fragmentRefs"?: {
            CompatSsoLogin_SessionFragment: CompatSsoLogin_SessionFragment;
          };
        })
      | null;
  };
};

export type CompatSsoLoginListQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type CompatSsoLoginListQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    compatSsoLogins: {
      __typename?: "CompatSsoLoginConnection";
      edges: Array<{
        __typename?: "CompatSsoLoginEdge";
        node: { __typename?: "CompatSsoLogin"; id: string } & {
          " $fragmentRefs"?: {
            CompatSsoLogin_LoginFragment: CompatSsoLogin_LoginFragment;
          };
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  } | null;
};

export type OAuth2Session_SessionFragment = {
  __typename?: "Oauth2Session";
  id: string;
  scope: string;
  createdAt: any;
  finishedAt?: any | null;
  client: {
    __typename?: "Oauth2Client";
    id: string;
    clientId: string;
    clientName?: string | null;
    clientUri?: any | null;
  };
} & { " $fragmentName"?: "OAuth2Session_SessionFragment" };

export type EndOAuth2SessionMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type EndOAuth2SessionMutation = {
  __typename?: "Mutation";
  endOauth2Session: {
    __typename?: "EndOAuth2SessionPayload";
    status: EndOAuth2SessionStatus;
    oauth2Session?:
      | ({ __typename?: "Oauth2Session"; id: string } & {
          " $fragmentRefs"?: {
            OAuth2Session_SessionFragment: OAuth2Session_SessionFragment;
          };
        })
      | null;
  };
};

export type OAuth2SessionListQueryQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type OAuth2SessionListQueryQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    oauth2Sessions: {
      __typename?: "Oauth2SessionConnection";
      edges: Array<{
        __typename?: "Oauth2SessionEdge";
        cursor: string;
        node: { __typename?: "Oauth2Session"; id: string } & {
          " $fragmentRefs"?: {
            OAuth2Session_SessionFragment: OAuth2Session_SessionFragment;
          };
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  } | null;
};

export type UserEmail_EmailFragment = {
  __typename?: "UserEmail";
  id: string;
  email: string;
  createdAt: any;
  confirmedAt?: any | null;
} & { " $fragmentName"?: "UserEmail_EmailFragment" };

export type VerifyEmailMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
  code: Scalars["String"]["input"];
}>;

export type VerifyEmailMutation = {
  __typename?: "Mutation";
  verifyEmail: {
    __typename?: "VerifyEmailPayload";
    status: VerifyEmailStatus;
    user?: {
      __typename?: "User";
      id: string;
      primaryEmail?: { __typename?: "UserEmail"; id: string } | null;
    } | null;
    email?:
      | ({ __typename?: "UserEmail"; id: string } & {
          " $fragmentRefs"?: {
            UserEmail_EmailFragment: UserEmail_EmailFragment;
          };
        })
      | null;
  };
};

export type ResendVerificationEmailMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ResendVerificationEmailMutation = {
  __typename?: "Mutation";
  sendVerificationEmail: {
    __typename?: "SendVerificationEmailPayload";
    status: SendVerificationEmailStatus;
    user: {
      __typename?: "User";
      id: string;
      primaryEmail?: { __typename?: "UserEmail"; id: string } | null;
    };
    email: { __typename?: "UserEmail"; id: string } & {
      " $fragmentRefs"?: { UserEmail_EmailFragment: UserEmail_EmailFragment };
    };
  };
};

export type RemoveEmailMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type RemoveEmailMutation = {
  __typename?: "Mutation";
  removeEmail: {
    __typename?: "RemoveEmailPayload";
    status: RemoveEmailStatus;
    user?: { __typename?: "User"; id: string } | null;
  };
};

export type SetPrimaryEmailMutationVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type SetPrimaryEmailMutation = {
  __typename?: "Mutation";
  setPrimaryEmail: {
    __typename?: "SetPrimaryEmailPayload";
    status: SetPrimaryEmailStatus;
    user?: {
      __typename?: "User";
      id: string;
      primaryEmail?: { __typename?: "UserEmail"; id: string } | null;
    } | null;
  };
};

export type UserEmailListQueryQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type UserEmailListQueryQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    emails: {
      __typename?: "UserEmailConnection";
      totalCount: number;
      edges: Array<{
        __typename?: "UserEmailEdge";
        cursor: string;
        node: { __typename?: "UserEmail"; id: string } & {
          " $fragmentRefs"?: {
            UserEmail_EmailFragment: UserEmail_EmailFragment;
          };
        };
      }>;
      pageInfo: {
        __typename?: "PageInfo";
        hasNextPage: boolean;
        hasPreviousPage: boolean;
        startCursor?: string | null;
        endCursor?: string | null;
      };
    };
  } | null;
};

export type UserPrimaryEmailQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type UserPrimaryEmailQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    primaryEmail?: { __typename?: "UserEmail"; id: string } | null;
  } | null;
};

export type UserGreetingQueryVariables = Exact<{
  userId: Scalars["ID"]["input"];
}>;

export type UserGreetingQuery = {
  __typename?: "Query";
  user?: {
    __typename?: "User";
    id: string;
    username: string;
    matrix: {
      __typename?: "MatrixUser";
      mxid: string;
      displayName?: string | null;
    };
  } | null;
};

export type BrowserSessionQueryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type BrowserSessionQueryQuery = {
  __typename?: "Query";
  browserSession?: {
    __typename?: "BrowserSession";
    id: string;
    createdAt: any;
    lastAuthentication?: {
      __typename?: "Authentication";
      id: string;
      createdAt: any;
    } | null;
    user: { __typename?: "User"; id: string; username: string };
  } | null;
};

export type OAuth2ClientQueryQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type OAuth2ClientQueryQuery = {
  __typename?: "Query";
  oauth2Client?: {
    __typename?: "Oauth2Client";
    id: string;
    clientId: string;
    clientName?: string | null;
    clientUri?: any | null;
    tosUri?: any | null;
    policyUri?: any | null;
    redirectUris: Array<any>;
  } | null;
};

export const BrowserSession_SessionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BrowserSession_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BrowserSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "lastAuthentication" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BrowserSession_SessionFragment, unknown>;
export const CompatSsoLogin_SessionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "deviceId" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompatSsoLogin_SessionFragment, unknown>;
export const CompatSsoLogin_LoginFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_login" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSsoLogin" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "redirectUri" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "session" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CompatSsoLogin_session" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "deviceId" } },
                { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "deviceId" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CompatSsoLogin_LoginFragment, unknown>;
export const OAuth2Session_SessionFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OAuth2Session_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Oauth2Session" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "scope" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "client" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "clientId" } },
                { kind: "Field", name: { kind: "Name", value: "clientName" } },
                { kind: "Field", name: { kind: "Name", value: "clientUri" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<OAuth2Session_SessionFragment, unknown>;
export const UserEmail_EmailFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserEmail_email" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserEmail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "confirmedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserEmail_EmailFragment, unknown>;
export const CurrentViewerQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CurrentViewerQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewer" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "User" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Anonymous" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CurrentViewerQueryQuery,
  CurrentViewerQueryQueryVariables
>;
export const CurrentViewerSessionQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CurrentViewerSessionQuery" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "viewerSession" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "__typename" } },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "BrowserSession" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "InlineFragment",
                  typeCondition: {
                    kind: "NamedType",
                    name: { kind: "Name", value: "Anonymous" },
                  },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CurrentViewerSessionQueryQuery,
  CurrentViewerSessionQueryQueryVariables
>;
export const AddEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AddEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "addEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userId" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "UserEmail_email" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserEmail_email" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserEmail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "confirmedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<AddEmailMutation, AddEmailMutationVariables>;
export const EndBrowserSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EndBrowserSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "endBrowserSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "browserSessionId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "browserSession" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BrowserSession_session" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BrowserSession_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BrowserSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "lastAuthentication" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EndBrowserSessionMutation,
  EndBrowserSessionMutationVariables
>;
export const BrowserSessionListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "BrowserSessionList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "browserSessions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "cursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "BrowserSession_session",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageInfo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasNextPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasPreviousPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "startCursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "endCursor" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BrowserSession_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BrowserSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "lastAuthentication" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BrowserSessionListQuery,
  BrowserSessionListQueryVariables
>;
export const EndCompatSessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EndCompatSession" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "endCompatSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "compatSessionId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "compatSession" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "CompatSsoLogin_session" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "deviceId" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EndCompatSessionMutation,
  EndCompatSessionMutationVariables
>;
export const CompatSsoLoginListDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "CompatSsoLoginList" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "compatSsoLogins" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "CompatSsoLogin_login",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageInfo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasNextPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasPreviousPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "startCursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "endCursor" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSession" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "deviceId" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "CompatSsoLogin_login" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "CompatSsoLogin" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "redirectUri" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "session" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "CompatSsoLogin_session" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "deviceId" } },
                { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CompatSsoLoginListQuery,
  CompatSsoLoginListQueryVariables
>;
export const EndOAuth2SessionDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "EndOAuth2Session" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "endOauth2Session" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "oauth2SessionId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oauth2Session" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "OAuth2Session_session" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OAuth2Session_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Oauth2Session" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "scope" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "client" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "clientId" } },
                { kind: "Field", name: { kind: "Name", value: "clientName" } },
                { kind: "Field", name: { kind: "Name", value: "clientUri" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  EndOAuth2SessionMutation,
  EndOAuth2SessionMutationVariables
>;
export const OAuth2SessionListQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "OAuth2SessionListQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "oauth2Sessions" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "cursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "OAuth2Session_session",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageInfo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasNextPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasPreviousPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "startCursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "endCursor" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "OAuth2Session_session" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Oauth2Session" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "scope" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "finishedAt" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "client" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "clientId" } },
                { kind: "Field", name: { kind: "Name", value: "clientName" } },
                { kind: "Field", name: { kind: "Name", value: "clientUri" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OAuth2SessionListQueryQuery,
  OAuth2SessionListQueryQueryVariables
>;
export const VerifyEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "VerifyEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "code" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "verifyEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userEmailId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "code" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "code" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "primaryEmail" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "UserEmail_email" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserEmail_email" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserEmail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "confirmedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<VerifyEmailMutation, VerifyEmailMutationVariables>;
export const ResendVerificationEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "ResendVerificationEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "sendVerificationEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userEmailId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "primaryEmail" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "email" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "UserEmail_email" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserEmail_email" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserEmail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "confirmedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ResendVerificationEmailMutation,
  ResendVerificationEmailMutationVariables
>;
export const RemoveEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "RemoveEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "removeEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userEmailId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<RemoveEmailMutation, RemoveEmailMutationVariables>;
export const SetPrimaryEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "SetPrimaryEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "setPrimaryEmail" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userEmailId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "status" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "primaryEmail" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  SetPrimaryEmailMutation,
  SetPrimaryEmailMutationVariables
>;
export const UserEmailListQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserEmailListQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "last" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "before" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "emails" },
                  arguments: [
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "first" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "first" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "after" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "after" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "last" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "last" },
                      },
                    },
                    {
                      kind: "Argument",
                      name: { kind: "Name", value: "before" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "before" },
                      },
                    },
                  ],
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "cursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "UserEmail_email",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pageInfo" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasNextPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "hasPreviousPage" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "startCursor" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "endCursor" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserEmail_email" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "UserEmail" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "confirmedAt" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserEmailListQueryQuery,
  UserEmailListQueryQueryVariables
>;
export const UserPrimaryEmailDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserPrimaryEmail" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "primaryEmail" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UserPrimaryEmailQuery,
  UserPrimaryEmailQueryVariables
>;
export const UserGreetingDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "UserGreeting" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "matrix" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "mxid" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "displayName" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserGreetingQuery, UserGreetingQueryVariables>;
export const BrowserSessionQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "BrowserSessionQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "browserSession" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "lastAuthentication" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  BrowserSessionQueryQuery,
  BrowserSessionQueryQueryVariables
>;
export const OAuth2ClientQueryDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "OAuth2ClientQuery" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "oauth2Client" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "clientId" } },
                { kind: "Field", name: { kind: "Name", value: "clientName" } },
                { kind: "Field", name: { kind: "Name", value: "clientUri" } },
                { kind: "Field", name: { kind: "Name", value: "tosUri" } },
                { kind: "Field", name: { kind: "Name", value: "policyUri" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "redirectUris" },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  OAuth2ClientQueryQuery,
  OAuth2ClientQueryQueryVariables
>;