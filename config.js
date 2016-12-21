module.exports = {
  session: {
    keys: [
      'ThisIsSecretKey93464850'
    ]
  },
  facebook: {
    clientId: process.env.FB_CLIENT_ID,
    clientSecret: process.env.FB_CLIENT_SECRET,
    callbackUrl: 'http://localhost:3000/api/auth/callback',
    profileFields: ['id', 'displayName', 'photos', 'email'],
  },
}
