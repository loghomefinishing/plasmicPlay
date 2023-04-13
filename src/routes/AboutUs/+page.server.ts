export async function load() {
    const response = await fetch(
        'https://codegen.plasmic.app/api/v1/loader/html/preview/ppmuvjZbY2TxQ24YuCkZEm/AboutUs?hydrate=1&embedHydrate=1',
        {
          headers: {
            // Your project ID and public API token
            'x-plasmic-api-project-tokens': 'ppmuvjZbY2TxQ24YuCkZEm:wQ2VqWF7raFRuznYQpUtXPegFtpQC1JwPdvIwZp7qr7GHS2rH2Eb1cAlAsEEo7c6CqC8MC7sZcBOHQ4DRe1Q'
            // You can find your PROJECT token by visiting
            // https://studio.plasmic.app/projects/[ppmuvjZbY2TxQ24YuCkZEm]/docs/loader#showToken=true
          }
        }
      );
      const result = await response.json();
    return {
      plasmic: result.html,
    };
  }