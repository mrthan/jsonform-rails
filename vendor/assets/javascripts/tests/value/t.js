var tests = [
  {
    name: 'minimal',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'The initial value should be that of the second field',
          'default': '<<values.second>>'
        },
        second: {
          type: 'string',
          title: 'Second field',
          'default': 'Hello copycat'
        },
        third: {
          type: 'string',
          title: 'Third field',
          description: 'This should still work with a jsonform opening tag <<',
          'default': 'This value has << an opening tag'
        }
      }
    }
  },
  {
    name: 'angular interpolation',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'This string should contain {{ angular interpolation characters }}',
          'default': '{{data.test}}'
        },
        second: {
          type: 'string',
          title: 'Second field',
          'default': 'Hello second'
        },
        third: {
          type: 'string',
          title: 'Third field',
          description: 'This description should say "Hello second": <<values.second>>',
          'default': 'Hello third'
        },
        fourth: {
          type: 'string',
          title: 'Fourth field',
          description: 'This field should be empty'
        }
      }
    }
  },
  {
    name: 'html description',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'This description contains <b>some</b> <u>html</u> markup',
          'default': '{{data.test}}'
        },
        second: {
          type: 'string',
          title: 'Second field',
          description: `<p>This is a paragraph</p>
<pre>This is a pre section with some {{angular delimiters}}</pre>`,
          'default': '{{data.test}}'
        }
      }
    }
  },
  {
    name: 'using value',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'The initial value should be that of the second field',
          'default': 'This first value should not appear'
        },
        second: {
          type: 'string',
          title: 'Second field',
          'default': 'This second value should not appear'
        }
      },
      form: [
        {
          key: 'first',
          value: '<<values.second>>'
        },
        {
          key: 'second',
          value: 'Hello copycat'
        }
      ]
    }
  },
  {
    name: 'array',
    jsonform: {
      schema: {
        thoughts: {
          type: 'array',
          title: 'Thoughts',
          items: {
            type: 'object',
            title: 'A thought',
            properties: {
              label: {
                type: 'string',
                title: 'Label',
                'default': 'Great thought << idx >>'
              },
              desc: {
                type: 'string',
                title: 'Description'
              }
            }
          }
        }
      },
      form: [
        {
          type: 'array',
          items: [{
            type: 'section',
            items: [
              {
                key: 'thoughts[].label'
              },
              {
                key: 'thoughts[].desc',
                value: '<<values.thoughts[].label>>\'s description'
              }
            ]
          }]
        }
      ]
    }
  },
  {
    name: 'tabarray',
    jsonform: {
      schema: {
        thoughts: {
          type: 'array',
          title: 'Thoughts',
          items: {
            type: 'object',
            title: 'A thought',
            properties: {
              label: {
                type: 'string',
                title: 'Label',
                'default': 'Great thought <<idx>>'
              },
              desc: {
                type: 'string',
                title: 'Description'
              }
            }
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          items: [{
            type: 'section',
            legend: '<<idx>>. <<value>>',
            items: [
              {
                key: 'thoughts[].label'
              },
              {
                key: 'thoughts[].desc',
                value: '<<values.thoughts[].label>>\'s description',
                valueInLegend: true
              }
            ]
          }]
        }
      ]
    }
  },
  {
    name: 'enum',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'The initial value should be that of the second field',
          'default': 'This first value should not appear'
        },
        second: {
          type: 'string',
          title: 'Second field',
          'enum': [
            'c1',
            'c2',
            'c3'
          ],
          'default': 'c2'
        }
      },
      form: [
        {
          key: 'first',
          value: '<<values.second>>'
        },
        {
          key: 'second',
          titleMap: {
            'c1': 'Choice 1',
            'c2': 'Choice 2',
            'c3': 'Choice 3'
          }
        }
      ]
    }
  },
  {
    name: 'previous values',
    jsonform: {
      schema: {
        first: {
          type: 'string',
          title: 'First field',
          description: 'The initial value should be that of the second field',
          'default': 'This first value should not appear'
        },
        second: {
          type: 'string',
          title: 'Second field',
          'enum': [
            'c1',
            'c2',
            'c3'
          ],
          'default': 'c2'
        }
      },
      form: [
        {
          key: 'first',
          value: '<<values.second>>'
        },
        {
          key: 'second',
          titleMap: {
            'c1': 'Choice 1',
            'c2': 'Choice 2',
            'c3': 'Choice 3'
          }
        }
      ],
      value: {
        second: 'c3'
      }
    }
  },
  {
    name: 'tabarray with values',
    jsonform: {
      schema: {
        thoughts: {
          type: 'array',
          title: 'Thoughts',
          items: {
            type: 'object',
            title: 'A thought',
            properties: {
              label: {
                type: 'string',
                title: 'Label',
                'default': 'Great thought <<idx>>'
              },
              desc: {
                type: 'string',
                title: 'Description'
              }
            }
          }
        }
      },
      form: [
        {
          type: 'tabarray',
          items: [{
            type: 'section',
            legend: '<<idx>>. <<value>>',
            items: [
              {
                key: 'thoughts[].label'
              },
              {
                key: 'thoughts[].desc',
                value: '<<values.thoughts[].label>>\'s description',
                valueInLegend: true
              }
            ]
          }]
        }
      ],
      value: {
        thoughts: [
          {
            label: 'blah',
            desc: 'foo'
          },
          {
            label: 'Ho',
            desc: 'thing'
          }
        ]
      }
    }
  }
];
