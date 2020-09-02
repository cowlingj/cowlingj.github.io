FROM ruby
RUN mkdir /app
WORKDIR /app
COPY Gemfile /app/Gemfile
RUN bundle install
COPY . /app

EXPOSE 3000
CMD ["jekyll", "serve", "--drafts", "-H", "0.0.0.0", "-P", "3000"]
