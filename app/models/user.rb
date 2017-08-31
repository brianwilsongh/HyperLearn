# == Schema Information
#
# Table name: users
#
#  id                 :integer          not null, primary key
#  username           :string           not null
#  password_digest    :string           not null
#  session_token      :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  avatar             :string
#  f_name             :string
#  l_name             :string
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class User < ActiveRecord::Base
  #user's paperclip attachment is called image

  validates :password_digest, :session_token, presence: true
  validates :username, presence: true, uniqueness: true
  validates :password, length: {minimum: 6, allow_nil: true}
  after_initialize(:ensure_session_token)

  has_attached_file :image,
  default_url: ActionController::Base.helpers.image_path("hyperlearn_logo.png")
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  has_many :subjects,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Subject

  has_many :fans,
    through: :subjects,
    source: :followers

  has_many :follows,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Follow

  has_many :followed_subjects,
    through: :follows,
    source: :subject


  attr_reader :password

  def all_subjects
    self.subjects + self.followed_subjects
  end

  def karma
    (self.subjects.count * 2) + (self.followed_subjects.count) + (self.fans.count)
  end

  def password=(password)
    #set password to ivar and store the hashed digest
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    #check if password matches by creating BCrypt::Password obj and checking against input
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    #ensure that session validation goes through
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

  def regen_session_token
    #gen new session token, save user, return to store in cookie
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save
    self.session_token
  end


  def self.find_by_credentials(username, password)
    #find user by username, if password matches hashed original return user else nil
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      return user
    end
    nil
  end

end
