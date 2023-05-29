export const selectIsLoggedIn = state => state.auth.isLoggedIn;

// export const getUser = state => state.auth;

export const selectUser = state => state.auth;

export const selectAuth = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;
