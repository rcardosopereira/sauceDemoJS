describe('Tech Stacks Validation', () => {
    beforeEach(() => {
      cy.visit('https://www.25friday.com/our-team/');
      cy.contains('button', 'Allow').click();
    });

    it('should validate tech stacks in API response match the website', () => {
        // Define a list of tech stacks from the provided array
        const techStacksArray = [
          { "code": ".NET", "label": ".NET" },
          { "code": "ANGULAR", "label": "Angular" },
          { "code": "DEVOPS", "label": "DevOps" },
          { "code": "GO", "label": "Go" },
          { "code": "JAVA", "label": "Java" },
          { "code": "MOBILE", "label": "Mobile" },
          { "code": "NODE.JS", "label": "Node.Js" },
          { "code": "PHP", "label": "PHP" },
          { "code": "PRODUCT MANAGEMENT", "label": "Product Management" },
          { "code": "PYTHON", "label": "Python" },
          { "code": "QA", "label": "QA" },
          { "code": "REACT", "label": "React" },
          { "code": "VUE.JS", "label": "Vue.js" },
          { "code": "PRODUCTMANAGEMENT", "label": "Product Management" },
          { "code": "PEOPLE&CULTURE", "label": "People&Culture" }
        ];
      
        // Make API request to get all tech stacks
        cy.request({
          method: 'GET',
          url: 'https://api.25friday.com/v1/WebSite/techstacks',
          headers: {
            accept: 'application/octet-stream',
          },
        }).then((apiResponse) => {
          // Extract tech stacks from API response
          const apiTechStacks = apiResponse.body;
      
          // Validate each tech stack
          apiTechStacks.forEach((apiTechStack, index) => {
            // Validate that the tech stack code from API matches the expected code
            expect(apiTechStack.code).to.be.equal(techStacksArray[index].code);
          });
        });
      });
    });