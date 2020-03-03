module.exports = {
	apps : [
		{
			name: 'SimpleFileVieweer',
			script: 'index.js',
			env: {
				NODE_ENV: 'production'
			},
      args: ['--colors'],
		}
	]
}