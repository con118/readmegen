function generateMarkdown(data) {
    return `# ${data.title}
    ## Description:
    ${data.description}
    ## Installation:
    ${data.installation}
    ## Usage:
    ${data.usage}
    ## Contribution:
    ${data.contribution}
    ## Testing:
    ${data.test}
    ## Contact Information:
    - Github: [${data.github}](https://github.com/${data.github})
    - Email: [${data.email}](mailto:${data.email}) `;
}
