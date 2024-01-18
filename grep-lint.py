import subprocess
import sys

def get_command():
    arguments_list = ["git", "grep", "-P", rule_regex, ":(exclude)grep-lint.py", ":(exclude)*.jpg"]

    return arguments_list

rules_to_check = [
    {
        'name': 'Only use variables prefixed with "sfc (stands for sourcefabric-common)"',
        'perl_regex': 'var\(--(?!sfc)',
        'tolerance': True
    },
    {
        'name': 'Use American English in code to follow naming in web standards',
        'perl_regex': 'colour',
        'tolerance': True
    },
]

any_rule_violated = False

for rule in rules_to_check:
    rule_regex = rule['perl_regex']
    rule_name = rule['name']

    try:
        violations_count = len(
            subprocess.check_output(get_command()).decode('utf-8').splitlines()
        )
    except subprocess.CalledProcessError as e:
        # ignore exception if grep simply didn't find matches
        if len(e.output) != 0:
            raise e
        else:
            violations_count = 0


    try:
        violations = subprocess.check_output(get_command(), stderr=subprocess.STDOUT).decode('utf-8')
    except subprocess.CalledProcessError as e:
        # ignore exception if grep simply didn't find matches
        if len(e.output) != 0:
            raise e
        else:
            violations = ''

    violations_count = len(violations.splitlines())

    if (violations_count > 0) or violations_count > violations_count:
        any_rule_violated = True
        print('\n\n' + violations + '\n\n')
        print("GREP-LINT RULE VIOLATED! '" + rule_name + "'")
        print("Rule regex: `" + rule_regex + "`")

sys.exit(1 if any_rule_violated else 0)
