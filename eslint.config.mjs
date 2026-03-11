import nextConfig from "eslint-config-next";

const eslintConfig = [
    { ignores: [".next/**", "node_modules/**", "coverage/**"] },
    ...nextConfig,
    {
        rules: {
            quotes: ["error", "double"],
            "jsx-quotes": ["error", "prefer-double"],
        },
    },
];

export default eslintConfig;
